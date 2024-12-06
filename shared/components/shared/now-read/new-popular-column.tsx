import React from 'react';
import { Cards } from './cards';

interface Props {
    className?: string;
}

export const NewPopularColumn: React.FC<Props> = ({ className }) => {
  return (
    <div>
        <span  className="py-2 px-4 text-[#8a8a8e] text-[15px] font-bold"> Набирающее популярность</span>
        <Cards />
        <Cards />
        <Cards />
    </div>
  );
};