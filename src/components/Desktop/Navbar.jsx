import React, { useState, useEffect, useRef } from 'react';
import { Search, Command, Settings, Volume2, Sun, Moon, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import VisitorCount from '../../utils/VisitorCount';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [showSettings, setShowSettings] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(false);
  
  const settingsRef = useRef(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const renderCalendar = () => {
    const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);
    const days = [];
    const today = new Date();
    const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year;
    
    // Empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = isCurrentMonth && day === today.getDate();
      days.push(
        <div
          key={day}
          className={`h-8 w-8 flex items-center justify-center rounded-full text-xs
            ${isToday ? 'bg-green-500 text-black font-bold' : 'hover:bg-white/10'}
            cursor-pointer transition-colors`}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };

  const changeMonth = (offset) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
  };

  return (
    <div className="h-8 bg-black/80 backdrop-blur-md text-white flex items-center justify-between px-4 text-sm fixed top-0 w-full z-40 border-b border-white/10">
      <div className="flex items-center space-x-4">
        <Command size={18} className="text-white hover:text-green-400 transition-colors cursor-pointer" />
        <span className="hidden sm:inline font-semibold">Finder</span>
        <span className="hidden sm:inline">File</span>
        <span className="hidden sm:inline">Edit</span>
        <span className="hidden sm:inline">View</span>
        <span className="hidden sm:inline">Go</span>
        <span className="hidden sm:inline">Window</span>
        <span className="hidden sm:inline">Help</span>
      </div>
      <div className="flex items-center space-x-4 relative">
        <VisitorCount />
        <Search size={16} className="hover:text-green-400 transition-colors cursor-pointer" />
        
        {/* Settings Button */}
        <div className="relative" ref={settingsRef}>
          <Settings 
            size={16} 
            className={`cursor-pointer transition-colors ${showSettings ? 'text-green-400' : 'hover:text-green-400'}`}
            onClick={() => {
              setShowSettings(!showSettings);
              setShowCalendar(false);
            }}
          />
          
          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-10 w-80 bg-[#1a1b26]/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden"
              >
                <div className="p-4 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="text-lg font-semibold text-white">Settings</h3>
                    <Settings size={18} className="text-green-400" />
                  </div>

                  {/* Display Mode */}
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Display Mode</label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsDarkMode(true)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg transition-all ${
                          isDarkMode 
                            ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                            : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
                        }`}
                      >
                        <Moon size={16} />
                        <span className="text-xs font-medium">Dark</span>
                      </button>
                      <button
                        onClick={() => setIsDarkMode(false)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg transition-all ${
                          !isDarkMode 
                            ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                            : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
                        }`}
                      >
                        <Sun size={16} />
                        <span className="text-xs font-medium">Light</span>
                      </button>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Quick Actions</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button 
                        onClick={() => setLocationEnabled(!locationEnabled)}
                        className={`flex flex-col items-center gap-1 py-3 px-2 rounded-lg transition-all border ${
                          locationEnabled 
                            ? 'bg-green-500/20 border-green-500/50' 
                            : 'bg-white/5 hover:bg-white/10 border-white/10'
                        }`}
                      >
                        <MapPin size={20} className={locationEnabled ? 'text-green-400' : 'text-gray-400'} />
                        <span className={`text-xs ${locationEnabled ? 'text-green-400' : 'text-gray-300'}`}>
                          Location
                        </span>
                      </button>
                      <button className="flex flex-col items-center gap-1 py-3 px-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10">
                        <Volume2 size={20} className="text-blue-400" />
                        <span className="text-xs text-gray-300">Sound</span>
                      </button>
                      <button className="flex flex-col items-center gap-1 py-3 px-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10">
                        <Settings size={20} className="text-purple-400" />
                        <span className="text-xs text-gray-300">System</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Date/Time with Calendar */}
        <div className="relative" ref={calendarRef}>
          <span 
            className="cursor-pointer hover:text-green-400 transition-colors"
            onClick={() => {
              setShowCalendar(!showCalendar);
              setShowSettings(false);
            }}
          >
            {time.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          
          <AnimatePresence>
            {showCalendar && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-10 w-72 bg-[#1a1b26]/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden"
              >
                <div className="p-4">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => changeMonth(-1)}
                      className="p-1 hover:bg-white/10 rounded transition-colors"
                    >
                      <ChevronLeft size={18} className="text-gray-400" />
                    </button>
                    <h3 className="text-sm font-semibold text-white">
                      {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </h3>
                    <button
                      onClick={() => changeMonth(1)}
                      className="p-1 hover:bg-white/10 rounded transition-colors"
                    >
                      <ChevronRight size={18} className="text-gray-400" />
                    </button>
                  </div>

                  {/* Day Labels */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                      <div key={day} className="h-8 w-8 flex items-center justify-center text-xs text-gray-500 font-medium">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {renderCalendar()}
                  </div>

                  {/* Current Time Display */}
                  <div className="mt-4 pt-4 border-t border-white/10 text-center">
                    <div className="text-2xl font-bold text-green-400 tabular-nums">
                      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
