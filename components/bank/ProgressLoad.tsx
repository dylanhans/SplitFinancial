'use client'
import React from 'react'
import { Progress } from "@/components/ui/progress2"

  
const ProgressLoad = () => {
    const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setTimeout(() => setProgress(66), 500);
//     return () => clearTimeout(timer);
//   }, []);

  return (
    <div>
        <Progress value={progress} className="w-full rounded-none" />
    </div>
  )
}

export default ProgressLoad