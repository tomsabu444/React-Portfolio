import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Search } from 'lucide-react';
import VisitorCount from '../../utils/VisitorCount';

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 bg-black/80 backdrop-blur-md text-white flex items-center justify-between px-4 text-sm fixed top-0 w-full z-40 border-b border-white/10">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-lg"></span>
        <span className="hidden sm:inline font-semibold">Finder</span>
        <span className="hidden sm:inline">File</span>
        <span className="hidden sm:inline">Edit</span>
        <span className="hidden sm:inline">View</span>
        <span className="hidden sm:inline">Go</span>
        <span className="hidden sm:inline">Window</span>
        <span className="hidden sm:inline">Help</span>
      </div>
      <div className="flex items-center space-x-4">
        <VisitorCount />
        <Search size={16} />
        <Wifi size={16} />
        <Battery size={16} />
        <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    </div>
  );
};

export default Navbar;
