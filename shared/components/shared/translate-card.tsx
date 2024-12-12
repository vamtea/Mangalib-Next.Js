import React from 'react';

import image from "@/shared/img/image-3.jpg";
import Image from 'next/image';
interface Props {
    className?: string;
    name: string;
}

export const TranslateCard: React.FC<Props> = ({ className, name }) => {
  return (
    <div className="inline-block shadow-translateCard rounded-[5px] cursor-pointer">
        <div className="flex gap-[8px] text-[14px] items-center font-semibold ">
            <Image src={image} className="w-[28px] h-[28px] border-[#ffffff] border-[2px] rounded-[4px] object-cover " alt="" />
            <span className="pr-2">{name}</span>
          </div>
    </div>
  );
};