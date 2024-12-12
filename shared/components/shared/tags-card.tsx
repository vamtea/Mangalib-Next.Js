import React from 'react';

interface Props {
    className?: string;
    name: string
}

export const TagsCard: React.FC<Props> = ({ className, name }) => {
  return (
    <div className={className}>
        <div className="inline-block hover:bg-[#e2dfdf]  px-2 border-[#e5e5e5] border-[1px] gap-[3px] transition ease duration-300 rounded-[6px] text-[14px] bg-[#e5e5e552]">
           {name}
        </div>
    </div>
  );
};