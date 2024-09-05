"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from '@/components/ui/separator';
import AuthFormCredit from '@/components/bank/AuthFormCredit';
import { cardsArray, cardTypes } from '@/constants';

const Apply = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('Overall');
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLUListElement>(null);


  useEffect(() => {
    const updateIndicator = () => {
      const activeTabElement = tabsRef.current?.querySelector(`[data-value="${activeTab}"]`);
      if (activeTabElement) {
        const { offsetLeft, clientWidth } = activeTabElement as HTMLElement;
        setIndicatorStyle({
          left: offsetLeft,
          width: clientWidth,
        });
        // handleCardSelect(null)
      }
    };

 

    updateIndicator(); // Initial update
    window.addEventListener('resize', updateIndicator); // Update on window resize

    return () => {
      window.removeEventListener('resize', updateIndicator); // Clean up on unmount
    };
  }, [activeTab]);

  useEffect(() => {
    setSelectedCard(null);
  }, [activeTab]);

  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };

  const handleCardSelect = (id: string | null) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  return (
    <main className='w-full h-full'>
      <section className='top-breadcrumb-options'>
        <div className="pt-10 pb-10 pl-[300px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="opacity-75">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/options">Options</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-bigtitle2 text-gray-900 pt-2">Credit Cards</h1>
        </div>
      </section>
      <section className='creditcard-promo bg-blue-500'>
        <img src="/icons/creditpromo.png" alt="Credit Card Promo" />
      </section>
      <section className='main-options'>
        <div className='flex flex-col pl-[300px]'>
          <h1 className="flex font-bigtitle2 text-gray-900 pt-2">Featured Credit Cards</h1>
          <div className='flex flex-col pr-[300px]'>
          <div className="mt-4 flex flex-row relative" ref={tabsRef}>
              {cardTypes.map((cardType) => (
                <p
                  key={cardType.category}
                  data-value={cardType.category}
                  onClick={() => handleTabClick(cardType.category)}
                  className={`font-subbed text-gray-900 flex p-4 cursor-pointer hover:text-gray-950 ${
                    activeTab === cardType.category ? 'active' : ''
                  }`}
                >
                  {cardType.category}
                </p>
              ))}
              {/* Tab Indicator */}
              <div
                className="tab-indicator absolute hidden lg:block"
                style={{
                  ...indicatorStyle,
                  transition: 'left 0.3s ease, width 0.3s ease',
                  bottom: '-1px', // Adjusts the position directly above the separator
                  height: '2px',
                  backgroundColor: 'currentColor',
                }}
              ></div>
            </div>
            <Separator className="flex-grow border-t border-gray-300" />
          </div>
          <div className="flex flex-row gap-x-8">
          {Object.entries(cardsArray)
            .filter(([id, card]) => activeTab === 'Overall' || card.subtype === activeTab)
            .map(([id, card]) => (
              <AuthFormCredit
                key={id}
                id={id}
                isChecked={selectedCard === id}
                onCheckmarkClick={() => handleCardSelect(id)}
                type={card.type}
                subtype={card.subtype}
                title={card.title}
                description={card.description}
                offer={card.offer}
                af={card.af}
                cl={card.cl}
                car={card.car}
                pr={card.pr}
                rewards="" // Assuming rewards are not defined in the example provided
                img={card.img}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='w-full h-full pl-[300px] pr-[300px]'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the other components' aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
};

export default Apply;
