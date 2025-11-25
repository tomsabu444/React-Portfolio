import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BootLoader = ({ onComplete }) => {
  const [text, setText] = useState([]);
  const [progress, setProgress] = useState(0);

  const bootSequence = [
    "Initializing Kernel...",
    "Loading Drivers...",
    "Mounting File System...",
    "Starting Network Services...",
    "Establishing Secure Connection...",
    "Access Granted."
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < bootSequence.length) {
        setText(prev => [...prev, bootSequence[currentIndex]]);
        currentIndex++;
        setProgress(prev => prev + (100 / bootSequence.length));
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black text-green-500 font-mono p-10 flex flex-col justify-between z-50">
      <div className="space-y-2">
        {text.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg"
          >
            <span className="text-blue-500">[OK]</span> {line}
          </motion.div>
        ))}
      </div>
      
      <div className="w-full max-w-md mx-auto">
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-green-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center mt-2 text-sm animate-pulse">System Booting...</p>
      </div>
    </div>
  );
};

export default BootLoader;
