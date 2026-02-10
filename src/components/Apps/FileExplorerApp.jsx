import React, { useState } from 'react';
import { Folder, File, Home, ChevronRight, FileText, Download, ExternalLink } from 'lucide-react';
import { fileSystem, getDir as getDirFromPath } from '../../utils/fileSystem';

const FileExploiterApp = () => {
  const [currentPath, setCurrentPath] = useState('~');
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState('');
  const [fileMetadata, setFileMetadata] = useState(null);

  // Navigate to directory
  const navigateToDir = (dirName) => {
    const newPath = currentPath === '~' ? `~/${dirName}` : `${currentPath}/${dirName}`;
    const targetDir = getDirFromPath(newPath);
    
    if (targetDir && targetDir.type === 'dir') {
      setCurrentPath(newPath);
      setSelectedFile(null);
      setFileContent('');
      setFileMetadata(null);
    }
  };

  // Go up one directory
  const goUp = () => {
    if (currentPath === '~') return;
    const newPath = currentPath.split('/').slice(0, -1).join('/') || '~';
    setCurrentPath(newPath);
    setSelectedFile(null);
    setFileContent('');
    setFileMetadata(null);
  };

  // Go to home
  const goHome = () => {
    setCurrentPath('~');
    setSelectedFile(null);
    setFileContent('');
    setFileMetadata(null);
  };

  // Open file
  const openFile = (fileName) => {
    const currentDir = getDirFromPath(currentPath);
    if (currentDir && currentDir.children[fileName]) {
      const file = currentDir.children[fileName];
      if (file.type === 'file') {
        setSelectedFile(fileName);
        setFileContent(file.content || 'No content available');
        setFileMetadata(file.metadata || null);
      }
    }
  };

  // Get breadcrumb path
  const getBreadcrumbs = () => {
    if (currentPath === '~') return ['home'];
    return ['home', ...currentPath.split('/').slice(1)];
  };

  // Get current directory contents
  const currentDir = getDirFromPath(currentPath);
  const items = currentDir && currentDir.type === 'dir' ? Object.entries(currentDir.children) : [];

  return (
    <div className="h-full bg-black text-[#0f0] font-mono flex flex-col">
      {/* Toolbar */}
      <div className="bg-gray-900 border-b border-[#0f0] p-2 flex items-center gap-2">
        <button
          onClick={goHome}
          className="p-1.5 hover:bg-gray-800 rounded transition-colors"
          title="Home"
        >
          <Home size={18} />
        </button>
        <button
          onClick={goUp}
          disabled={currentPath === '~'}
          className={`p-1.5 rounded transition-colors ${
            currentPath === '~' ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-800'
          }`}
          title="Up"
        >
          <ChevronRight size={18} className="rotate-180" />
        </button>
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-sm flex-1 bg-gray-800 px-3 py-1 rounded">
          {getBreadcrumbs().map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight size={14} className="text-gray-500" />}
              <span className={idx === getBreadcrumbs().length - 1 ? 'text-[#0f0]' : 'text-gray-400'}>
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* File list panel */}
        <div className="w-1/2 border-r border-[#0f0]/30 overflow-y-auto">
          <div className="p-4 space-y-1">
            {items.map(([name, item]) => (
              <div
                key={name}
                onClick={() => item.type === 'dir' ? navigateToDir(name) : openFile(name)}
                className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-all ${
                  selectedFile === name
                    ? 'bg-[#0f0] text-black'
                    : 'hover:bg-[#0f0]/10 hover:border-l-2 hover:border-[#0f0]'
                }`}
              >
                {item.type === 'dir' ? (
                  <Folder size={20} className="flex-shrink-0" />
                ) : (
                  <File size={20} className="flex-shrink-0" />
                )}
                <span className="text-sm font-medium truncate">{name}</span>
                {item.type === 'dir' && <ChevronRight size={16} className="ml-auto flex-shrink-0" />}
              </div>
            ))}
            
            {items.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <Folder size={48} className="mx-auto mb-2 opacity-30" />
                <p>This folder is empty</p>
              </div>
            )}
          </div>
        </div>

        {/* Preview/content panel */}
        <div className="w-1/2 overflow-y-auto bg-gray-950">
          {selectedFile ? (
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#0f0]/30">
                <FileText size={24} />
                <div>
                  <h3 className="text-lg font-bold">{selectedFile}</h3>
                  <p className="text-xs text-gray-500">
                    {fileMetadata?.fileType ? `.${fileMetadata.fileType.toLowerCase()}` : 'file'}
                  </p>
                </div>
              </div>
              
              <div className="bg-black border border-[#0f0]/30 rounded p-4">
                <pre className="text-sm whitespace-pre-wrap break-words">{fileContent}</pre>
              </div>

              {/* Dynamic actions based on file metadata */}
              {fileMetadata?.downloadable && (
                <div className="mt-4 flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#0f0] text-black rounded hover:bg-[#0f0]/80 transition-colors text-sm font-bold">
                    <Download size={16} />
                    Download {selectedFile}
                  </button>
                </div>
              )}

              {fileMetadata?.externalLink && (
                <div className="mt-4">
                  <a
                    href={fileMetadata.externalLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f0] text-black rounded hover:bg-[#0f0]/80 transition-colors text-sm font-bold"
                  >
                    <ExternalLink size={16} />
                    {fileMetadata.externalLink.label}
                  </a>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <div className="text-center">
                <File size={64} className="mx-auto mb-4 opacity-20" />
                <p>Select a file to preview</p>
                <p className="text-xs mt-2">Click on any file or folder to view</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status bar */}
      <div className="bg-gray-900 border-t border-[#0f0] px-4 py-1.5 text-xs text-gray-400 flex items-center justify-between">
        <span>{items.length} items</span>
        <span>{currentPath === '~' ? '/home/kali' : `/home/kali${currentPath.substring(1)}`}</span>
      </div>
    </div>
  );
};

export default FileExploiterApp;
