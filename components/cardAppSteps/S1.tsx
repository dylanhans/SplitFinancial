import React from 'react'
import { Button } from '../ui/button'
import LangSelect from '../bank/LangSelect'



const Step1: React.FC<Step1Props> = ({ onClick, card }) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const messages: Record<string, string> = {
    Normal: `You must be a Canadian resident.`,
    personalIncome: `You have a minimum annual personal income of $${formatNumber(card.personalIncome)}.`,
    minHouseIncome: `You need a minimum house income of $${formatNumber(card.minHouseIncome)}.`,
    minTIA: `The minimum Total Income Amount (TIA) required is $${formatNumber(card.minTIA)}.`,
  };

  // Map the card data to list items with contextual messages
  const listItems = Object.entries(messages).map(([key, message]) => {
    // Use type assertion to access card properties
    const value = card[key as keyof CardDetails];
    return value !== undefined ? <li key={key}>{message}</li> : null;
  });

  return (
    <header className="flex flex-col gap-2 mt-2">
      {/* Conditionally render the "main class" div */}
    <div className={`transition-all duration-300 slide-up-enter slide-up-enter-active`}>
          {/* // currentAppStep ? 'slide-up-enter slide-up-enter-active' : 'slide-up-exit slide-up-exit-active' */}
        <div className="main class">
          <div className="flex flex-col gap-1">
            <div className='language-select flex justify-end pb-10 pt-32'>
              <LangSelect />
            </div>
            <h1 className=" pl-2 font-bigtitle2 text-gray-900">
              It's easy to apply! Get a response in less than 60 seconds.
            </h1>
              <p className="pl-2 font-sub mt-5 text-gray-900 mb-5">
                You've chosen…
              </p>
            
            <h1 className="pl-2 font-bigtitle text-gray-900">
              {card.title} <span className="text-xs align-super">®</span>
            </h1>
            {card.note && (
              <p className="font-sub text-gray-900 pt-5 pb-5">
                {card.note}
              </p>
            )}

          {(card.personalIncome || card.minHouseIncome || card.minTIA) && (
            <div className="w-full pr-4 pb-10 pl-3 rounded-md pt-8 mt-3 shadow-top-bottom">
              <p className="text-14 text-gray-900">
                By selecting “Agree and Continue”, you confirm that:
              </p>

              <p className="font-smallboldish text-gray-900 text-14 pt-2">
                You are a Canadian resident and at least the age of majority in your province.
              </p>

              <p className="font-smallboldish text-gray-900 text-14 pt-2">
                You meet <span className='bold-sm'>one </span>of the following requirements:
              </p>

              <ul className="cardnote-list font-smallboldish text-gray-900 text-14">
                {listItems}
              </ul>

              <p className="pt-2 text-14 text-gray-900">
                You give us permission to access your credit bureau report for this application.
              </p>
            </div>
            )}
          </div>
          <div className='flex justify-end pt-3'>
            <Button type="submit" onClick={onClick} className="form-btn mt-12">
              Agree and Continue
            </Button>
          </div>
       </div>
      
    </div>
    </header>
  )
}

export default Step1