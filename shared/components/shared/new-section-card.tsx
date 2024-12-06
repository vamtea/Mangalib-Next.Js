import Image from 'next/image';
import React from 'react';

import image from '@/shared/img/image-4.jpg'

interface Props {
    className?: string;
}

export const NewSectionCard: React.FC<Props> = ({ className }) => {
  return (
    <div className="rounded-[6px]">
        <div className=" overflow-hidden">
            <Image className="object-cover rounded-[6px]" width={127} height={177} src={image} alt="image" />
        </div>
        <div className="flex flex-col mt-[6px]">
            <span className="text-[14px] font-semibold break-words">Плакса ангел</span>
            <p className="text-[#8a8a8e] text-[13px] pb-[10px] ">Манхва</p>
        </div>
    </div>
  );
};