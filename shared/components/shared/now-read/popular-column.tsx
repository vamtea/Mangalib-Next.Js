import React from 'react';
import { Cards } from './cards';

interface Props {
    className?: string;
}

export const PopularColumn: React.FC<Props> = ({ className }) => {
  return (
    <div>
        <span className="py-2 px-4 text-[#8a8a8e] text-[15px] font-bold">Популярное</span>
        <Cards />
        <Cards />
        <Cards />
    </div>
  );
};