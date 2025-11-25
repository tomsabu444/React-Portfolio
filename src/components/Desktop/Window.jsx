import React from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Maximize2 } from 'lucide-react';

const Window = ({ id, title, onClose, children, isActive, onFocus }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      onMouseDown={onFocus}
      className={`absolute top-20 left-20 w-[600px] h-[400px] bg-[#1a1b26] rounded-lg shadow-2xl overflow-hidden border border-gray-700 flex flex-col ${isActive ? 'z-30' : 'z-10'}`}
    >
      {/* Title Bar */}
      <div className="h-8 bg-[#1f2335] flex items-center justify-between px-3 border-b border-gray-800 cursor-move">
        <div className="flex items-center space-x-2">
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group">
            <X size={8} className="opacity-0 group-hover:opacity-100 text-black" />
          </button>
          <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center group">
            <Minus size={8} className="opacity-0 group-hover:opacity-100 text-black" />
          </button>
          <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center group">
            <Maximize2 size={8} className="opacity-0 group-hover:opacity-100 text-black" />
          </button>
        </div>
        <span className="text-gray-400 text-sm font-mono">{title}</span>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 text-gray-300 font-mono">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
