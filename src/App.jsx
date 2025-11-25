import React, { useState } from 'react';
import BootLoader from './components/BootLoader';
import Navbar from './components/Desktop/Navbar';
import Dock from './components/Desktop/Dock';
import Window from './components/Desktop/Window';
import Terminal from './components/Terminal/Terminal';
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
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-green-400">About Me</h2>
            <p>I am a passionate developer building the future of the web.</p>
            <p className="mt-2">Welcome to my digital workspace.</p>
          </div>
        );
      case 'projects':
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Projects</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/10 p-4 rounded border border-white/20">
                <h3 className="font-bold">Portfolio V2</h3>
                <p className="text-sm text-gray-400">React + Tailwind HackerOS</p>
              </div>
              <div className="bg-white/10 p-4 rounded border border-white/20">
                <h3 className="font-bold">Project Alpha</h3>
                <p className="text-sm text-gray-400">Secure Chat App</p>
              </div>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="p-4">
             <h2 className="text-2xl font-bold mb-4 text-purple-400">Skills</h2>
             <div className="flex flex-wrap gap-2">
               {['React', 'Node.js', 'Python', 'Cybersecurity', 'Linux', 'Git'].map(skill => (
                 <span key={skill} className="bg-purple-900/50 px-3 py-1 rounded-full text-sm border border-purple-500/30">{skill}</span>
               ))}
             </div>
          </div>
        );
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
