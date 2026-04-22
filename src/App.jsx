import React, { useState, useEffect, useCallback, Suspense } from 'react';
import BootLoader from './components/BootLoader';
import Navbar from './components/Desktop/Navbar';
import Dock from './components/Desktop/Dock';
import Window from './components/Desktop/Window';
import Loader from './components/Loader';
import LaserFlow from './components/LaserFlow';
import ContextMenu from './components/ContextMenu';
import { AnimatePresence } from 'framer-motion';

// Lazy load applications
const Terminal = React.lazy(() => import('./components/Terminal/Terminal'));
const FileExplorerApp = React.lazy(() => import('./components/Apps/FileExplorerApp'));
const AboutApp = React.lazy(() => import('./components/Apps/AboutApp'));
const ProjectsApp = React.lazy(() => import('./components/Apps/ProjectsApp'));
const SkillsApp = React.lazy(() => import('./components/Apps/SkillsApp'));
const ContactApp = React.lazy(() => import('./components/Apps/ContactApp'));

function App() {
  // Check session storage to see if boot loader has already been shown
  const [booted, setBooted] = useState(sessionStorage.getItem('bootCompleted') === 'true');
  const [openApps, setOpenApps] = useState([]);
  const [activeApp, setActiveApp] = useState(null);
  const [maximizedApps, setMaximizedApps] = useState([]);
  const [minimizedApps, setMinimizedApps] = useState([]);
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0 });

  // Auto-open terminal if boot was skipped
  useEffect(() => {
    const bootSkipped = sessionStorage.getItem('bootCompleted') === 'true';
    if (bootSkipped) {
      setTimeout(() => {
        setOpenApps(['terminal']);
        setActiveApp('terminal');
      }, 500);
    }
  }, []);

  const handleBootComplete = () => {
    // Save boot completion to session storage
    sessionStorage.setItem('bootCompleted', 'true');
    setBooted(true);
    // Auto open terminal on boot
    setTimeout(() => openApp('terminal'), 500);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({
      show: true,
      x: e.clientX,
      y: e.clientY
    });
  };

  const closeContextMenu = () => {
    setContextMenu({ show: false, x: 0, y: 0 });
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
    setMaximizedApps(maximizedApps.filter(id => id !== appId));
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
      setMaximizedApps(maximizedApps.filter(id => id !== appId));
      setActiveApp(null);
    }
  };

  const handleMaximizeChange = useCallback((appId, isMaximized) => {
    setMaximizedApps((currentMaximizedApps) => {
      const isAlreadyMaximized = currentMaximizedApps.includes(appId);

      if (isMaximized) {
        return isAlreadyMaximized ? currentMaximizedApps : [...currentMaximizedApps, appId];
      }

      return isAlreadyMaximized
        ? currentMaximizedApps.filter((id) => id !== appId)
        : currentMaximizedApps;
    });
  }, []);

  const renderAppContent = (appId) => {
    switch (appId) {
      case 'terminal':
        return <Terminal />;
      case 'files':
        return <FileExplorerApp />;
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
      files: 'File Explorer - /home/kali',
      about: 'About Me',
      projects: 'Projects Explorer',
      skills: 'Skill Matrix',
      contact: 'Contact Channel'
    };
    return titles[appId] || 'Application';
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-black" onContextMenu={handleContextMenu}>
      {/* LaserFlow Background */}
      <div className="absolute inset-0 z-0">
        <LaserFlow
          color="#00ff00"
          wispDensity={1}
          horizontalBeamOffset={0}
          verticalBeamOffset={-0.5}
          flowSpeed={0.35}
          verticalSizing={4.9}
          horizontalSizing={0.8}
          fogIntensity={0.25}
          fogScale={0.1}
          wispSpeed={15}
          wispIntensity={5.5}
          flowStrength={0.2}
          decay={3}
        />
      </div>
      
      {/* Overlay gradient for better readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-[2] h-full w-full">
        {!booted ? (
          <BootLoader onComplete={handleBootComplete} />
        ) : (
          <>
            <Navbar onOpenApp={openApp} />
            
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
                    onMaximizeChange={handleMaximizeChange}
                    enableMaximizedContentConstraint={appId === 'skills' || appId === 'projects' || appId === 'about'}
                    maximizedContentClassName="xl:max-w-[75%] xl:mx-auto"
                  >
                    <Suspense fallback={<Loader />}>
                      {renderAppContent(appId)}
                    </Suspense>
                  </Window>
                ))}
              </AnimatePresence>
            </div>

            <Dock onOpenApp={openApp} hasMaximizedWindow={maximizedApps.length > 0} />
          </>
        )}

        {/* Custom Context Menu */}
        {contextMenu.show && (
          <ContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            onClose={closeContextMenu}
            onOpenApp={openApp}
          />
        )}
      </div>
    </div>
  );
}

export default App;
