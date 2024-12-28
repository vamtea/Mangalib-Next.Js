import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  type: string;
}

export const CatalogSideCard: React.FC<Props> = ({
  className,
  imageUrl,
  name,
  type,
}) => {
  return (
    <div className={className}>
      <div className="flex flex-col gap-[6px] w-[161px] p-2">
        <div className="rounded-[6px] relative object-cover ">
          <Image
            className="object-cover rounded-[6px] w-[161px] h-[225px]"
            src={imageUrl}
            alt="image"
            width={161}
            height={225}
          />
          <div className="absolute bg-[#3bb33b] w-7 h-[18px] rounded-[4px] text-[11px] font-semibold text-white text-center top-[5px] -left-[5px] ">
            9.7
          </div>
        </div>
        <div className="flex flex-col flex-wrap">
          <span className="font-semibold break-words text-[14px]">{name}</span>
          <p className="text-[13px] text-[#8a8a8e]">{type}</p>
        </div>
      </div>
    </div>
  );
};
