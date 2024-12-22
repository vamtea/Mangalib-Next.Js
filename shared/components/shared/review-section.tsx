import { ArrowRight } from 'lucide-react';
import React from 'react';
import { ReviewSectionCards } from './review-section-cards';
import { ReviewSkeleton } from '.';

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

          {
            [...new Array(6)].map((_, index) => (
              <div className="bg-white rounded-[8px]">
                <ReviewSkeleton key={index} />
              </div>
            ))
          }
           {/* <ReviewSectionCards />
           <ReviewSectionCards />
           <ReviewSectionCards />
           <ReviewSectionCards /> */}
        </div>
    </div>
  );
};