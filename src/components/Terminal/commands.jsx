import React from 'react';
import { fileSystem, getDir } from '../../utils/fileSystem';

export const executeCommand = (input, currentPath, setPath) => {
  const [cmd, ...args] = input.trim().split(' ');
  
  if (!cmd) return null;

  switch (cmd) {
    case 'help':
      return (
        <div className="space-y-1">
          <p>Available commands:</p>
          <div className="grid grid-cols-[100px_1fr] gap-2">
            <span className="text-yellow-400">ls</span> <span>List directory contents</span>
            <span className="text-yellow-400">cd</span> <span>Change directory</span>
            <span className="text-yellow-400">pwd</span> <span>Print working directory</span>
            <span className="text-yellow-400">cat</span> <span>Concatenate and display files</span>
            <span className="text-yellow-400">whoami</span> <span>Display current user</span>
            <span className="text-yellow-400">date</span> <span>Display current date</span>
            <span className="text-yellow-400">clear</span> <span>Clear terminal output</span>
          </div>
        </div>
      );

    case 'whoami':
      return 'root@kali';

    case 'date':
      return new Date().toString();

    case 'pwd':
      return currentPath === '~' ? '/home/kali' : `/home/kali${currentPath.substring(1)}`;

    case 'ls':
      const dir = getDir(currentPath);
      if (dir && dir.type === 'dir') {
        return (
          <div className="flex flex-wrap gap-4">
            {Object.entries(dir.children).map(([name, item]) => (
              <span key={name} className={item.type === 'dir' ? 'text-blue-400 font-bold' : 'text-white'}>
                {name}
              </span>
            ))}
          </div>
        );
      }
      return <span className="text-red-500">Error: Cannot list directory.</span>;

    case 'cd':
      const target = args[0];
      if (!target || target === '~') {
        setPath('~');
        return null;
      }
      if (target === '..') {
        if (currentPath === '~') return null;
        const newPath = currentPath.split('/').slice(0, -1).join('/') || '~';
        setPath(newPath);
        return null;
      }
      
      // Simple relative path support
      const newPath = currentPath === '~' ? `~/${target}` : `${currentPath}/${target}`;
      const targetDir = getDir(newPath);
      
      if (targetDir && targetDir.type === 'dir') {
        setPath(newPath);
        return null;
      }
      return <span className="text-red-500">cd: no such file or directory: {target}</span>;

    case 'cat':
      const fileName = args[0];
      if (!fileName) return <span className="text-red-500">cat: missing operand</span>;
      
      const currentDir = getDir(currentPath);
      if (currentDir && currentDir.children[fileName]) {
        const file = currentDir.children[fileName];
        if (file.type === 'file') {
          return file.content;
        }
        return <span className="text-red-500">cat: {fileName}: Is a directory</span>;
      }
      return <span className="text-red-500">cat: {fileName}: No such file or directory</span>;

    default:
      return <span className="text-red-500">Command not found: {cmd}. Type 'help' for available commands.</span>;
  }
};
