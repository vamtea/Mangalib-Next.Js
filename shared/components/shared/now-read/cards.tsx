import React from "react";
// import image from '@/shared/img/avatar.jpg'
import Image from "next/image";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  type: string;
}

export const Cards: React.FC<Props> = ({ className, imageUrl, name, type }) => {
  return (
    <div className="flex py-2 px-4 gap-4 items-center">
      <div className=" shadow-custom rounded-[6px] overflow-hidden">
        <Image
          src={imageUrl}
          className="rounded-[6px] w-[72px] h-[72px]"
          height={72}
          width={72}
          alt="image"
          style={{objectFit: 'cover'}}
        />
      </div>
      <div className="flex flex-col gap-[5px] w-[270px]">
        <span className="text-[14px] font-bold break-words">{name}</span>
        <span className="text-[12px] text-[#8a8a8e]">{type}</span>
      </div>
    </div>
  );
};
