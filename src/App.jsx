import React, { useState } from 'react';
import BootLoader from './components/BootLoader';
import Navbar from './components/Desktop/Navbar';
import Dock from './components/Desktop/Dock';
import Window from './components/Desktop/Window';
import Terminal from './components/Terminal/Terminal';
import AboutApp from './components/Apps/AboutApp';
import ProjectsApp from './components/Apps/ProjectsApp';
import SkillsApp from './components/Apps/SkillsApp';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [booted, setBooted] = useState(false);
  const [openApps, setOpenApps] = useState([]);
  const [activeApp, setActiveApp] = useState(null);

  const handleBootComplete = () => {
    setBooted(true);
    // Auto open terminal on boot
    setTimeout(() => openApp('terminal'), 500);
  };

  const openApp = (appId) => {
    if (!openApps.includes(appId)) {
      setOpenApps([...openApps, appId]);
    }
    setActiveApp(appId);
  };

  const closeApp = (appId) => {
    setOpenApps(openApps.filter(id => id !== appId));
    if (activeApp === appId) {
      setActiveApp(openApps[openApps.length - 2] || null);
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
         return (
           <div className="p-4">
             <h2 className="text-2xl font-bold mb-4 text-red-400">Contact</h2>
             <p>Email: user@example.com</p>
             <p>GitHub: github.com/user</p>
           </div>
         );
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
