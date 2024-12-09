import React from 'react';

interface Props {
    className?: string;
    title: string;
}

export const FiltersGenreInput: React.FC<Props> = ({ className, title }) => {
  return (
    <div className={className}>
        <span>{title}</span>
        <div className="flex gap-[10px] text-[14px] justify-between">
            <input type="number" placeholder="От" className="rounded-[5px] border-[#dcdee2] transition-all duration-200 ease-in-out border hover:border-blue-500  hover:shadow-lg p-[3px] pl-2" />
            — 
            <input type="number" placeholder="До" className="rounded-[5px] border-[#dcdee2] transition-all duration-200 ease-in-out border hover:border-blue-500  hover:shadow-lg p-[3px] pl-2" />
        </div>
    </div>
  );
};