'use client';
import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress2'; // Ensure this component supports transitions or you have custom CSS

interface ProgressLoadProps {
  progress: number;
}

const ProgressLoad: React.FC<ProgressLoadProps> = ({ progress }) => {
  const [currentProgress, setCurrentProgress] = useState(progress);

  useEffect(() => {
    // Use setTimeout to allow React to complete the DOM update before transitioning
    const timer = setTimeout(() => setCurrentProgress(progress), 15);

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [progress]);

  return (
    <div className="relative w-full border-l border-[#0060b1]">
      <Progress 
        value={currentProgress} 
        className="w-full rounded-none transition-all duration-500 ease-in-out bg-background" 
        style={{ width: `${currentProgress}%` }}
      />
    </div>
  );
};

export default ProgressLoad;