import React from 'react'
import { Button } from '../ui/button'

const Step1: React.FC<Step1Props> = ({ onClick }) => {
  return (
    <header className="flex flex-col gap-2 md:gap-8 mt-2">
      {/* Conditionally render the "main class" div */}
    <div className={`transition-all duration-300 slide-up-enter slide-up-enter-active`}>
          {/* // currentAppStep ? 'slide-up-enter slide-up-enter-active' : 'slide-up-exit slide-up-exit-active' */}
        <div className="main class">
          <div className="flex ml-1 flex-col gap-1 md:gap-3">
            <h1 className="font-bigtitle2 text-gray-900">
              It's easy to apply! Get a response in less than 60 seconds.
              <p className="font-sub mt-10 text-gray-900">
                You've chosen…
              </p>
            </h1>
            <h1 className="font-bigtitle text-gray-900">
              Split Secured Credit <span className="text-xs align-super">®</span>
            </h1>
          </div>
          <Button type="submit" onClick={onClick} className="form-btn mt-10">
            Get started
          </Button>
          
       </div>
      
    </div>
    </header>
  )
}

export default Step1