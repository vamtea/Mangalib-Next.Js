import Image from 'next/image';
import React from 'react';


interface Props {
    className?: string;
    imageUrl: string;
    name: string;
    type: string;
}

export const NewSectionCard: React.FC<Props> = ({ className, imageUrl, name, type }) => {
  return (
    <div className="rounded-[6px]">
        <div className=" overflow-hidden w-[127px] h-[177px]">
            <Image className="object-cover rounded-[6px] w-[127px] h-[177px]" width={127} height={177} src={imageUrl} alt="image" />
        </div>
        <div className="flex flex-col mt-[6px]">
            <span className="text-[14px] font-semibold break-words">{name}</span>
            <p className="text-[#8a8a8e] text-[13px] pb-[10px] ">{type}</p>
        </div>
    </div>
  );
};