import { ArrowRight } from 'lucide-react';
import React from 'react';
import { CollectionSectionCard } from './collection-section-card';

interface Props {
    className?: string;
}

export const CollectionSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
    <div className="flex items-center gap-2 pl-4 mt-5 mb-2 ">
        <span className="text-[15px] font-bold">
            Последние коллекции
        </span>
        <ArrowRight color="#000000" size={17} />
    </div>
    <div className=" pb-4 grid grid-cols-2 gap-4">
        <CollectionSectionCard />
        <CollectionSectionCard />
        <CollectionSectionCard />
        <CollectionSectionCard />
    </div>
</div>
  );
};