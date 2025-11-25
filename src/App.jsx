import React, { useState } from 'react';
import BootLoader from './components/BootLoader';
import Navbar from './components/Desktop/Navbar';
import Dock from './components/Desktop/Dock';
import Window from './components/Desktop/Window';
import Terminal from './components/Terminal/Terminal';
import AboutApp from './components/Apps/AboutApp';
import ProjectsApp from './components/Apps/ProjectsApp';
import SkillsApp from './components/Apps/SkillsApp';
import ContactApp from './components/Apps/ContactApp';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [booted, setBooted] = useState(false);
  const [openApps, setOpenApps] = useState([]);
  const [activeApp, setActiveApp] = useState(null);

  const [minimizedApps, setMinimizedApps] = useState([]);

  const handleBootComplete = () => {
    setBooted(true);
    // Auto open terminal on boot
    setTimeout(() => openApp('terminal'), 500);
  };

  const openApp = (appId) => {
    if (openApps.includes(appId)) {
      if (activeApp === appId && !minimizedApps.includes(appId)) {
        setMinimizedApps([...minimizedApps, appId]);
        setActiveApp(null);
      } else {
        setMinimizedApps(minimizedApps.filter(id => id !== appId));
        setActiveApp(appId);
      }
    } else {
      setOpenApps([...openApps, appId]);
      setActiveApp(appId);
    }
  };

  const closeApp = (appId) => {
    setOpenApps(openApps.filter(id => id !== appId));
    setMinimizedApps(minimizedApps.filter(id => id !== appId));
    if (activeApp === appId) {
      setActiveApp(openApps[openApps.length - 2] || null);
    }
  };

  const toggleMinimize = (appId) => {
    if (minimizedApps.includes(appId)) {
      setMinimizedApps(minimizedApps.filter(id => id !== appId));
      setActiveApp(appId);
    } else {
      setMinimizedApps([...minimizedApps, appId]);
      setActiveApp(null);
    }
  };

  const renderAppContent = (appId) => {
    switch (appId) {
      case 'terminal':
        return <Terminal />;
      case 'about':
        return <AboutApp />;
      case 'projects':
        return <ProjectsApp />;
      case 'skills':
        return <SkillsApp />;
      case 'contact':
         return <ContactApp />;
      default:
        return <div>App not found</div>;
    }
  };

  const getAppTitle = (appId) => {
    const titles = {
      terminal: 'Terminal - root@kali',
      about: 'About Me',
      projects: 'Projects Explorer',
      skills: 'Skill Matrix',
      contact: 'Contact Channel'
    };
    return titles[appId] || 'Application';
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[url('https://images.unsplash.com/photo-1510511459019-5dda7724fd82?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      {!booted ? (
        <BootLoader onComplete={handleBootComplete} />
      ) : (
        <>
          <Navbar />
          
          <div className="relative h-full w-full pt-8 pb-20">
            <AnimatePresence>
              {openApps.map(appId => (
                <Window
                  key={appId}
                  id={appId}
                  title={getAppTitle(appId)}
                  onClose={() => closeApp(appId)}
                  onMinimize={() => toggleMinimize(appId)}
                  isMinimized={minimizedApps.includes(appId)}
                  isActive={activeApp === appId}
                  onFocus={() => setActiveApp(appId)}
                >
                  {renderAppContent(appId)}
                </Window>
              ))}
            </AnimatePresence>
          </div>

          <Dock onOpenApp={openApp} />
        </>
      )}
    </div>
  );
}

export default App;
