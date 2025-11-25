import React from 'react';

export const commands = {
  help: {
    description: 'List available commands',
    execute: () => (
      <div className="space-y-1">
        <p>Available commands:</p>
        <div className="grid grid-cols-[100px_1fr] gap-2">
          <span className="text-yellow-400">about</span> <span>Display information about me</span>
          <span className="text-yellow-400">projects</span> <span>List my projects</span>
          <span className="text-yellow-400">skills</span> <span>Show my technical skills</span>
          <span className="text-yellow-400">contact</span> <span>Display contact information</span>
          <span className="text-yellow-400">clear</span> <span>Clear terminal output</span>
          <span className="text-yellow-400">whoami</span> <span>Display current user</span>
          <span className="text-yellow-400">date</span> <span>Display current date and time</span>
        </div>
      </div>
    )
  },
  whoami: {
    description: 'Display current user',
    execute: () => 'root@kali'
  },
  date: {
    description: 'Display current date',
    execute: () => new Date().toString()
  },
  about: {
    description: 'About me',
    execute: () => (
      <div>
        <p className="mb-2">Hi, I'm a passionate developer and ethical hacker.</p>
        <p>I love building secure and scalable applications while exploring the depths of cybersecurity.</p>
      </div>
    )
  },
  projects: {
    description: 'List projects',
    execute: () => (
      <div>
        <p className="mb-2">My Projects:</p>
        <ul className="list-disc pl-4">
          <li><span className="text-blue-400">Portfolio V2</span> - React based HackerOS</li>
          <li><span className="text-blue-400">Project Alpha</span> - Secure chat application</li>
          <li><span className="text-blue-400">Project Beta</span> - Vulnerability scanner</li>
        </ul>
      </div>
    )
  },
  skills: {
    description: 'Show skills',
    execute: () => (
      <div>
        <p>Skills:</p>
        <p>React, Node.js, Python, C++, Cybersecurity, Penetration Testing</p>
      </div>
    )
  },
  contact: {
    description: 'Contact info',
    execute: () => (
      <div>
        <p>Email: user@example.com</p>
        <p>GitHub: github.com/user</p>
      </div>
    )
  }
};

export const executeCommand = (input) => {
  const [cmd, ...args] = input.trim().split(' ');
  
  if (!cmd) return null;
  
  if (commands[cmd]) {
    return commands[cmd].execute(args);
  } else {
    return <span className="text-red-500">Command not found: {cmd}. Type 'help' for available commands.</span>;
  }
};
