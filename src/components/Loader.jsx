import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <Loader2 className="w-8 h-8 text-green-500 animate-spin" />
    </div>
  );
};

export default Loader;
