import React from 'react';

interface Props {
    className?: string;
    text: string;
}

export const FiltersFooterButton: React.FC<Props> = ({ className, text }) => {
  return (
    <div className={className}>
        <button className="text-[14px] h-[30px] px-14">{text}</button>
    </div>
  );
};