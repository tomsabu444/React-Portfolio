import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import DigitalRain from './DigitalRain';

const BootLoader = ({ onComplete }) => {
  const [text, setText] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [progress, setProgress] = useState(0);
  const hasRun = useRef(false);

  const bootSequence = [
    "Initializing Kernel...",
    "Loading Drivers...",
    "Mounting File System...",
    "Starting Network Services...",
    "Establishing Secure Connection...",
    "Access Granted."
  ];

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const runBootSequence = async () => {
      const totalSteps = bootSequence.length;
      
      for (let i = 0; i < totalSteps; i++) {
        const line = bootSequence[i];
        setCurrentLine(line);
        
        // Wait for a bit to simulate processing
        await new Promise(r => setTimeout(r, 1500));

        // Step complete
        setText(prev => [...prev, line]);
        setCurrentLine("");
        setProgress(((i + 1) / totalSteps) * 100);
      }

      setTimeout(onComplete, 1000);
    };

    runBootSequence();
  }, []);

  return (
    <div className="fixed inset-0 bg-black text-green-500 font-mono p-10 flex flex-col justify-between z-50 overflow-hidden">
      {/* Background Rain Effect */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <DigitalRain />
      </div>

      <div className="space-y-2 z-10 relative">
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
        
        {/* Current processing line with custom loader */}
        {currentLine && (
          <div className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <div className="loader scale-45 origin-top-left absolute top-0 left-0"></div>
            </div>
            <div className="text-lg text-yellow-500">
              {currentLine}
            </div>
          </div>
        )}
      </div>
      
      <div className="w-full max-w-md mx-auto">
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-green-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center mt-2 text-sm animate-pulse">
          {progress < 100 ? "System Booting..." : "System Ready"}
        </p>
      </div>
    </div>
  );
};

export default BootLoader;
