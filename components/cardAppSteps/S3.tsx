'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { ScrollArea } from "@/components/ui/scroll-area"


const Step3: React.FC<Step1Props> = ({ onClick, card }) => {
  const [content, setContent] = useState<string>('');

  // Async function to fetch HTML content
  const fetchHtmlContent = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      setContent(data);
    } catch (error) {
      console.error('Error fetching HTML file:', error);
    }
  };

  // Fetch content when the component mounts
  if (card?.document) {
    fetchHtmlContent(card.document);
  }
  
  return (
    <div className="flex flex-col gap-5 mt-12">
      {/* Conditionally render the "main class" div */}
    <div className={`transition-all duration-300 slide-up-enter slide-up-enter-active`}>
          {/* // currentAppStep ? 'slide-up-enter slide-up-enter-active' : 'slide-up-exit slide-up-exit-active' */}
        <div className="main class pt-40">
          <div className="flex ml-1 flex-col gap-1">
            <p className="font-bigtitle2 text-gray-900">
            Please review the following information.
            </p>
              <p className="font-subbed text-gray-900">
              The Information Box below shows details about the credit card you selected to apply 
              for and in some cases details for other credit cards. When you apply we'll consider 
              you for these cards based on your eligibility. At the end of this application 
              you will find out if you have been approved for the card you selected, a different 
              card, or more than one card. If we present you a card option in place of, or in addition to, the one 
              you selected to apply for, please choose the card that best suits your needs.
              </p>
            <div className='flex justify-end'>
              <a
                href={card.document} // Replace with the correct path to your HTML file
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img 
                  src="/icons/icon-print.svg"
                  alt="Print Icon"
                  width={20}
                  height={20}
                  className="mr-2" // Adds margin to the right of the SVG
                />
                <p className="font-submore text-blue-900 cursor-pointer hover-card-trigger text-right">
                  Print or save information
                </p>
              </a>
            </div>
            <div className='rounded-sm border border-gray-200'>
                <ScrollArea className="h-[300px] w-full text-[black]">
                     <div dangerouslySetInnerHTML={{ __html: content }} className='p-4'/>
                </ScrollArea>
            </div>
            <p className="font-subbed mt-10 text-gray-700">
                By clicking "Continue", you confirm that you have read the Information Box and agree to be considered for all the card options shown in the Information Box.
            </p>
          </div>
          
       </div>
    </div>
    </div>
  )
}

export default Step3