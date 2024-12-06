import React from 'react';
import image from '@/shared/img/avatar.jpg'
import Image from 'next/image';

interface Props {
    className?: string;
}

export const Cards: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex py-2 px-4 gap-4 items-center">
        <div className=" shadow-custom rounded-[6px]">
        <Image src={image} className="rounded-[6px] w-[72px] h-[72px]" height={72} width={72} alt="image" />
        </div>
        <div className="flex flex-col gap-[5px] w-[270px]">
            <span className="text-[14px] font-bold break-words">Name og manhwa/manga/manhua manga/manhua</span>
            <span className="text-[12px] text-[#8a8a8e]">manhwa</span>
        </div>

    </div>
  );
};