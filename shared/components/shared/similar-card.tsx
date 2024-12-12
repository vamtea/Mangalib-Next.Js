import { Minus, Plus } from "lucide-react";
import React from "react";
import Image from "next/image";
import image from "@/shared/img/image-4.jpg";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
  type: string;
  status: string;
  similarType: string;
  title: string;
}

export const SimilarCard: React.FC<Props> = ({
  className,
  type,
  status,
  similarType,
  title,
}) => {
  return (
    <div className="flex pr-[12px] gap-[12px] shadow-translateCard rounded-[6px] w-[308px]">
      <Image
        className="w-[85px] h-[119px] object-cover rounded-[6px]"
        src={image}
        alt="image"
      />
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between py-[7px]">
          <div className="flex flex-col">
            <p className="text-[#007deb] text-[12px]">{similarType}</p>
            <span className="break-words text-[14px] font-semibold">
              {title}
            </span>
          </div>
          <div className="flex text-[12px] gap-[8px] mt-[6px] text-[#8a8a8e] items-center">
            <p>{type}</p>·<p>{status}</p>
          </div>
        </div>
        <div className="flex flex-col py-[12px] gap-[10px] justify-center items-center">
            <div className=" cursor-pointer hover:bg-[#3cce7b3a] rounded-[3px] w-[26px] h-[26px] flex items-center justify-center">
          <Plus className={cn("hover:text-[#3cce7b] text-[#8a8a8e]", className)} size={12}  />
            </div>
          <span className="text-[#3cce7b] text-[12px] font-semibold py-[10px]">
            12
          </span>
          <div className=" cursor-pointer hover:text-[#f44336] hover:bg-[#f4433649] rounded-[3px] w-[26px] h-[26px] flex items-center justify-center">
          <Minus className="hover:text-[#f44336] text-[#8a8a8e] cursor-pointer" size={13} />
          </div>
        </div>
      </div>
    </div>
  );
};
