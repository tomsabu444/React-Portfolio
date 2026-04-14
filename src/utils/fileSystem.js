// Shared virtual file system for Terminal and File Explorer
export const fileSystem = {
  '~': {
    type: 'dir',
    children: {
      'Downloads': {
        type: 'dir',
        children: {
          'resume.pdf': { 
            type: 'file', 
            content: 'Binary file not shown.',
            metadata: {
              fileType: 'pdf',
              downloadable: true,
              downloadUrl: '/path/to/resume.pdf', // Update with actual path
              icon: 'file-text'
            }
          }
        }
      },
      'blog.tomsabu.com': {
        type: 'dir',
        children: {
          'readme.txt': { 
            type: 'file', 
            content: 'Coming soon... Check out blog.tomsabu.com',
            metadata: {
              fileType: 'txt',
              externalLink: {
                url: 'https://blog.tomsabu.com',
                label: 'Visit blog.tomsabu.com'
              }
            }
          }
        }
      },
      'play.tomsabu.com': {
        type: 'dir',
        children: {
          'readme.txt': { 
            type: 'file', 
            content: 'Coming soon... Check out play.tomsabu.com',
            metadata: {
              fileType: 'txt',
              externalLink: {
                url: 'https://play.tomsabu.com',
                label: 'Visit play.tomsabu.com'
              }
            }
          }
        }
      }
    }
  }
};

// Helper function to navigate the file system
export const getDir = (path) => {
  const parts = path.split('/').filter(p => p);
  let current = fileSystem['~'];
  
  // Handle absolute path starting with ~
  if (parts[0] === '~') {
    parts.shift();
  }

  for (const part of parts) {
    if (current.type === 'dir' && current.children[part]) {
      current = current.children[part];
    } else {
      return null;
    }
  }
  return current;
};
