import React, { useEffect, useRef } from 'react';
import { Terminal, FolderOpen, RefreshCw, Info, Settings, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContextMenu = ({ x, y, onClose, onOpenApp }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const menuItems = [
    { 
      id: 'terminal', 
      label: 'Open Terminal', 
      icon: Terminal,
      action: () => {
        onOpenApp && onOpenApp('terminal');
        onClose();
      }
    },
    { 
      id: 'files', 
      label: 'File Exploiter', 
      icon: FolderOpen,
      action: () => {
        onOpenApp && onOpenApp('files');
        onClose();
      }
    },
    { type: 'separator' },
    { 
      id: 'about', 
      label: 'About Me', 
      icon: Info,
      action: () => {
        onOpenApp && onOpenApp('about');
        onClose();
      }
    },
    { 
      id: 'skills', 
      label: 'Skills', 
      icon: Settings,
      action: () => {
        onOpenApp && onOpenApp('skills');
        onClose();
      }
    },
    { type: 'separator' },
    { 
      id: 'refresh', 
      label: 'Refresh', 
      icon: RefreshCw,
      action: () => {
        window.location.reload();
        onClose();
      }
    },
    { type: 'separator' },
    { 
      id: 'close', 
      label: 'Close Menu', 
      icon: X,
      action: onClose
    }
  ];

  return (
    <AnimatePresence>
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.15 }}
        className="min-w-[200px] bg-black/95 border-2 border-[#0f0] rounded-lg p-1 shadow-[0_8px_32px_rgba(0,255,0,0.3),0_0_20px_rgba(0,255,0,0.1)] backdrop-blur-lg font-mono"
        style={{
          position: 'fixed',
          left: `${x}px`,
          top: `${y}px`,
          zIndex: 9999
        }}
      >
        {menuItems.map((item, index) => {
          if (item.type === 'separator') {
            return (
              <div 
                key={`separator-${index}`} 
                className="h-px bg-gradient-to-r from-transparent via-[#0f0] to-transparent mx-2 my-1 opacity-30"
              />
            );
          }

          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={item.action}
              className="w-full flex items-center gap-3 px-4 py-2.5 bg-transparent border-none text-[#0f0] text-sm text-left rounded transition-all duration-200 hover:bg-[#0f0]/10 hover:pl-5 hover:shadow-[inset_3px_0_0_#0f0] active:bg-[#0f0]/20 active:scale-[0.98]"
            >
              <Icon size={16} className="shrink-0 text-[#0f0]" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default ContextMenu;
