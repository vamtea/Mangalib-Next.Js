import { ChevronRight } from 'lucide-react';
import React from 'react';

interface Props {
    className?: string;
    name: string;
}

export const FiltersButton: React.FC<Props> = ({ className, name }) => {
  return (
    <div className={className}>
        <button className="flex justify-between items-center w-full hover:bg-filtersButton p-2 mt-[5px] mx-[4px] rounded-[4px]">
            <span className="text-[14px] font-semibold">{name}</span>
            <div className="flex gap-[10px] items-center">
                <p className="text-[#8a8a8e] text-[12px]">Любые</p>
                <ChevronRight color="#8a8a8e" size={15} />
            </div>
        </button>
    </div>
  );
};