import React from 'react';
import { ReviewHeader } from './review-header';
import { ReviewCard } from './review-card';
import CollectionSectionCard from '../../collection-section-card';
import { ReviewSectionCards } from '../../review-section-cards';

interface Props {
    className?: string;
}

export const Review: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
        <ReviewHeader />
        
        <div className="grid grid-cols-3 gap-4 mb-4"> 
            <ReviewSectionCards />
            <ReviewSectionCards />
            <ReviewSectionCards />
            <ReviewSectionCards />
        </div>
    </div>
  );
};