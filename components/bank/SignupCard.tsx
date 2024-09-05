'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import { Card } from '../ui/card';
import { cardsArray } from '@/constants';

const SignupCard = () => {
  const searchParams = useSearchParams();
  
  const cardId = searchParams.get('id');
  // Retrieve the card details using the 'id'
  const card = cardId ? cardsArray[cardId] : null;

  // If no card is found, handle the case (e.g., render nothing or a placeholder)
  if (!card) {
    return <div>Card not found</div>;
  }
  
  return (
    <div>
      <Image
          src={card.img}  // Use the image URL from the card details
          alt={card.title} // Optionally use the card title as alt text
          width={320}
          height={320}
      />
    </div>
  )
}

export default SignupCard