import Image from "next/image";
import React from "react";
import image from "@/shared/img/image-3.jpg";
import { Progress } from "../ui";

interface Props {
  className?: string;
}

export const ActiveAccountCards: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex gap-3 p-2 rounded-[6px] bg-white w-full">
      <div className="">
        <Image
          className="w-[52px] h-[52px] rounded-[4px]"
          width={52}
          height={52}
          src={image}
          alt="avatar"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[14px] text-ellipsis whitespace-nowrap overflow-hidden">
            WeisZ23
          </span>
          <p className="font-normal text-[12px] text-[#8a8a8e]">#1</p>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px] text-[#212329]">Уровень: 15</span>
          <p className="font-normal text-[12px] text-[#8a8a8e]">287 / 1485</p>
        </div>
        <div className="mt-[6px]">
          <Progress value={33} />
        </div>
      </div>
    </div>
  );
};
