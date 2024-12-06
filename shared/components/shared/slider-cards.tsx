import React from "react";
import image from "@/shared/img/avatar.jpg";
import Image from "next/image";
import Link from "next/link";
interface Props {
  className?: string;
}

export const SliderCards: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex flex-col gap-[6px] w-[135px]">
      <div className="relative">
        <Image className="h-[189px] w-[135px] rounded-md"  src={image} alt="avatar" />
        <div className="absolute left-[6px] bottom-[6px] bg-black/70 text-white py-[3px] px-[6px] text-[12px] rounded">
          chapter 178
        </div>
      </div>

      <Link href="/mang/">
        <div className="text-[14px] font-bold break-words">Навание jfjfjfjf fjfjfjfjfj</div>
        <div className="text-[13px]">манхва</div>
      </Link>
    </div>
  );
};
