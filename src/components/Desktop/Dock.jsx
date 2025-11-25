import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Folder, Code, Mail } from 'lucide-react';

const Dock = ({ onOpenApp, hasMaximizedWindow }) => {
  const [isHovered, setIsHovered] = useState(false);
  const apps = [
    { id: 'terminal', icon: Terminal, label: 'Terminal', color: 'bg-black border-green-500 border' },
    { id: 'about', icon: User, label: 'About', color: 'bg-blue-600' },
    { id: 'projects', icon: Folder, label: 'Projects', color: 'bg-yellow-500' },
    { id: 'skills', icon: Code, label: 'Skills', color: 'bg-purple-600' },
    { id: 'contact', icon: Mail, label: 'Contact', color: 'bg-red-500' },
  ];

  return (
    <motion.div 
      className="fixed left-1/2 transform -translate-x-1/2 z-50"
      initial={{ bottom: 16 }}
      animate={{ 
        bottom: hasMaximizedWindow && !isHovered ? -48 : 16
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-end space-x-2 bg-white/10 backdrop-blur-xl p-2 rounded-2xl border border-white/20">
        {apps.map((app) => (
          <motion.button
            key={app.id}
            onClick={() => onOpenApp(app.id)}
            whileHover={{ scale: 1.2, y: -10 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex flex-col items-center"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${app.color} text-white`}>
              <app.icon size={24} />
            </div>
            <span className="absolute -top-10 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {app.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Dock;
