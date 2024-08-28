'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { ScrollArea } from "@/components/ui/scroll-area"


const Step4: React.FC<Step1Props> = ({ onClick }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/documents/test_document.html')
            .then((response) => response.text())
            .then((data) => setContent(data));
    }, []);
  return (
    <header className="flex flex-col gap-5 md:gap-8 mt-7">
      {/* Conditionally render the "main class" div */}
    <div className={`transition-all duration-300 slide-up-enter slide-up-enter-active`}>
          {/* // currentAppStep ? 'slide-up-enter slide-up-enter-active' : 'slide-up-exit slide-up-exit-active' */}
        <div className="main class">
          <div className="flex ml-1 flex-col gap-1 md:gap-3">
            <h1 className="font-bigtitle2 text-gray-900">
            Please review the following information.
              <p className="font-subbed mt-10 text-gray-900">
              The Information Box below shows details about the credit card you selected to apply 
              for and in some cases details for other credit cards. When you apply we'll consider 
              you for these cards based on your eligibility. At the end of this application 
              you will find out if you have been approved for the card you selected, a different 
              card, or more than one card. If we present you a card option in place of, or in addition to, the one 
              you selected to apply for, please choose the card that best suits your needs.
              </p>
            </h1>
                <div>
                <a
                    href="/documents/test_document.html" // Replace with the correct path to your HTML file
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    
                    <p className="font-submore text-right text-blue-900 cursor-pointer">
                      {/* <img 
                      src="/icons/print_icon.png"
                      width={20}
                      height={20}
                      className='text-blue-900'
                      /> */}
                      Print or save information
                    </p>
                </a>
                </div>
                <ScrollArea className="h-[300px] w-full text-[black] rounded-none border border-gray-300">
                     <div dangerouslySetInnerHTML={{ __html: content }} className='p-4'/>
                </ScrollArea>
            <p className="font-subbed mt-10 text-gray-700">
                By clicking "Continue", you confirm that you have read the Information Box and agree to be considered for all the card options shown in the Information Box.
            </p>
          </div>
          <Button type="submit" onClick={onClick} className="form-btn mt-10">
            Continue
          </Button>
       </div>
    </div>
    </header>
  )
}

export default Step4