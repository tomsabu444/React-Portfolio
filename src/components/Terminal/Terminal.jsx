import React, { useState, useRef, useEffect } from 'react';
import { executeCommand } from './commands';

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to HackerOS v2.0.0' },
    { type: 'output', content: "Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      if (!cmd) return;

      if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }

      const output = executeCommand(cmd);
      
      setHistory(prev => [
        ...prev,
        { type: 'input', content: cmd },
        { type: 'output', content: output }
      ]);
      setInput('');
    }
  };

  return (
    <div className="h-full flex flex-col bg-black/90 p-2 font-mono text-sm" onClick={() => inputRef.current?.focus()}>
      <div className="flex-1 overflow-y-auto space-y-1 custom-scrollbar">
        {history.map((entry, i) => (
          <div key={i} className={`${entry.type === 'input' ? 'text-white' : 'text-green-400'}`}>
            {entry.type === 'input' ? (
              <div className="flex items-center">
                <span className="text-green-500 mr-2">root@kali:~#</span>
                <span>{entry.content}</span>
              </div>
            ) : (
              <div>{entry.content}</div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      
      <div className="flex items-center mt-2">
        <span className="text-green-500 mr-2">root@kali:~#</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-white border-none p-0 focus:ring-0"
          autoFocus
          spellCheck="false"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Terminal;
