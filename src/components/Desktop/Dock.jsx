import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Terminal, User, Folder, Code, Mail, FolderOpen } from 'lucide-react';

const DockIcon = ({ app, onOpenApp, mouseX }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [48, 80, 48]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [48, 80, 48]);
  
  const iconSizeTransform = useTransform(distance, [-150, 0, 150], [24, 40, 24]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  
  const iconSize = useSpring(iconSizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.button
      ref={ref}
      onClick={() => onOpenApp(app.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width, height }}
      whileTap={{ scale: 0.9 }}
      className="relative flex items-center justify-center"
    >
      <motion.div
        className={`w-full h-full rounded-xl flex items-center justify-center shadow-lg ${app.color} text-white`}
      >
        <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
          <app.icon style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 2, x: '-50%' }}
            className="absolute -top-8 left-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
          >
            {app.label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const Dock = ({ onOpenApp, hasMaximizedWindow }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(Infinity);
  
  const apps = [
    { id: 'terminal', icon: Terminal, label: 'Terminal', color: 'bg-black border-green-500 border' },
    // { id: 'files', icon: FolderOpen, label: 'Explorer', color: 'bg-gray-700 border-green-400 border' },
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
      onMouseMove={(e) => {
        mouseX.set(e.pageX);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
        setIsHovered(false);
      }}
    >
      <div className="flex items-end gap-4 bg-white/10 backdrop-blur-xl px-4 pb-3 rounded-2xl border border-white/20 h-[70px]">
        {apps.map((app) => (
          <DockIcon key={app.id} app={app} onOpenApp={onOpenApp} mouseX={mouseX} />
        ))}
      </div>
    </motion.div>
  );
};

export default Dock;
