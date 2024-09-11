import React from 'react'
import { Button } from '../ui/button'
import LangSelect from '../bank/LangSelect'



const Step1: React.FC<Step1Props> = ({ onClick, card }) => {
  return (
    <header className="flex flex-col gap-2 mt-2">
      {/* Conditionally render the "main class" div */}
    <div className={`transition-all duration-300 slide-up-enter slide-up-enter-active`}>
          {/* // currentAppStep ? 'slide-up-enter slide-up-enter-active' : 'slide-up-exit slide-up-exit-active' */}
        <div className="main class">
          <div className="flex ml-1 flex-col gap-1">
            <div className='language-select flex justify-end mb-20'>
              <LangSelect />
            </div>
            <h1 className="font-bigtitle2 text-gray-900">
              It's easy to apply! Get a response in less than 60 seconds.
            </h1>
              <p className="font-sub mt-10 text-gray-900 mb-5">
                You've chosen…
              </p>
            
            <h1 className="font-bigtitle text-gray-900">
              {card.title} <span className="text-xs align-super">®</span>
            </h1>
            {card.note && (
              <p className="font-sub text-gray-900 pt-5 pb-5">
                {card.note}
              </p>
            )}
          </div>
          <div className='flex justify-end pt-3'>
            <Button type="submit" onClick={onClick} className="form-btn mt-10">
              Get started
            </Button>
          </div>
       </div>
      
    </div>
    </header>
  )
}

export default Step1