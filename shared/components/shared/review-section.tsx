import { ArrowRight } from 'lucide-react';
import React from 'react';
import { ReviewSectionCards } from './review-section-cards';

interface Props {
    className?: string;
}

export const ReviewSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <div className="flex items-center gap-2 pl-4 mt-5 mb-2 ">
            <span className="text-[15px] font-bold">
                Последние отзывы
            </span>
            <ArrowRight color="#000000" size={17} />
        </div>
        <div className=" pb-4 grid grid-cols-2 gap-4">
           <ReviewSectionCards />
           <ReviewSectionCards />
           <ReviewSectionCards />
           <ReviewSectionCards />
        </div>
    </div>
  );
};