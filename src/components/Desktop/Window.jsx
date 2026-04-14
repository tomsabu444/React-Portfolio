import React, { useState, useRef, useEffect } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';
import useWindowContentClass from '../../hooks/useWindowContentClass';

const Window = ({
  id,
  title,
  onClose,
  children,
  isActive,
  onFocus,
  onMinimize,
  isMinimized,
  onMaximizeChange,
  enableMaximizedContentConstraint = false,
  maximizedContentClassName
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [size, setSize] = useState({ width: 800, height: 600 });
  const windowRef = useRef(null);
  const dragControls = useDragControls();
  const contentClassName = useWindowContentClass({
    baseClassName: 'flex-1 overflow-auto p-0 text-gray-300 font-mono relative w-full',
    isMaximized,
    enableMaximizedConstraint: enableMaximizedContentConstraint,
    maximizedClassName: maximizedContentClassName
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmallScreen = window.innerWidth < 768;
      setIsMaximized(isSmallScreen);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMaximize = () => {
    const newMaximizedState = !isMaximized;
    setIsMaximized(newMaximizedState);
    if (onMaximizeChange) {
      onMaximizeChange(id, newMaximizedState);
    }
  };

  useEffect(() => {
    if (onMaximizeChange) {
      onMaximizeChange(id, isMaximized);
    }
  }, [isMaximized, onMaximizeChange]);

  // If minimized, don't render (moved after all hooks)
  if (isMinimized) return null;

  return (
    <motion.div
      drag={!isMaximized}
      dragListener={false}
      dragControls={dragControls}
      dragMomentum={false}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        width: isMaximized ? '100vw' : size.width,
        height: isMaximized ? 'calc(100vh - 32px)' : size.height,
        top: isMaximized ? '32px' : undefined,
        left: isMaximized ? 0 : undefined,
        x: isMaximized ? 0 : undefined,
        y: isMaximized ? 0 : undefined,
        position: isMaximized ? 'fixed' : 'absolute'
      }}
      exit={{ scale: 0.9, opacity: 0 }}
      onMouseDown={onFocus}
      style={{ 
        zIndex: isActive ? 30 : 10,
        resize: isMaximized ? 'none' : 'both',
        overflow: 'hidden',
        minWidth: '300px',
        minHeight: '200px'
      }}
      className={`bg-[#1a1b26] rounded-lg shadow-2xl flex flex-col border border-gray-700 ${isMaximized ? 'rounded-none' : ''}`}
    >
      {/* Title Bar */}
      <div 
        onPointerDown={(e) => {
          if (!isMaximized) dragControls.start(e);
        }}
        className="h-8 bg-[#1f2335] flex items-center justify-between px-3 border-b border-gray-800 cursor-move select-none shrink-0"
      >
        <div className="flex items-center space-x-2" onPointerDown={(e) => e.stopPropagation()}>
          <button 
            onClick={onClose} 
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group"
          >
            <X size={8} className="opacity-0 group-hover:opacity-100 text-black" />
          </button>
          <button 
            onClick={onMinimize}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center group"
          >
            <Minus size={8} className="opacity-0 group-hover:opacity-100 text-black" />
          </button>
          <button 
            onClick={toggleMaximize}
            className="hidden md:flex w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 items-center justify-center group"
          >
            {isMaximized ? (
              <Minimize2 size={8} className="opacity-0 group-hover:opacity-100 text-black" />
            ) : (
              <Maximize2 size={8} className="opacity-0 group-hover:opacity-100 text-black" />
            )}
          </button>
        </div>
        <span className="text-gray-400 text-sm font-mono">{title}</span>
        <div className="w-12"></div>
      </div>

      {/* Content */}
      <div className={contentClassName}>
        {children}
      </div>
      
      {/* Custom Resize Handle (Visual only, CSS resize does the work) */}
      {!isMaximized && (
        <div className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize z-50 pointer-events-none">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-gray-600 opacity-50">
             <path d="M22 22L12 22L22 12Z" fill="currentColor"/>
           </svg>
        </div>
      )}
    </motion.div>
  );
};

export default Window;
