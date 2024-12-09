import Image from "next/image";
import React from "react";
import image from "@/shared/img/image-3.jpg";

interface Props {
  className?: string;
}

export const CatalogSideCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex flex-col gap-[6px] w-[161px] p-2">
        <div className="rounded-[6px] relative object-cover ">
          <Image
            className="object-cover rounded-[6px] w-[161px] h-[225px]"
           
            src={image}
            alt="image"
          />
          <div className="absolute bg-[#3bb33b] w-7 h-[18px] rounded-[4px] text-[11px] font-semibold text-white text-center top-[5px] -left-[5px] ">
            9.7
          </div>
        </div>
        <div className="flex flex-col flex-wrap">
          <span className="font-semibold break-words text-[14px]">
            Поднятие уровня в одиночку
          </span>
          <p className="text-[13px] text-[#8a8a8e]">Манхва</p>
        </div>
      </div>
    </div>
  );
};
