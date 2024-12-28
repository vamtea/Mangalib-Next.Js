import React from "react";
import image from "@/shared/img/avatar.jpg";
import Image from "next/image";
import Link from "next/link";

type MangaCardProps = {
  className?: string;
  imageUrl: string;
  name: string;
  type: string;
  chapter: number;
  id: number;
};

export const SliderCards: React.FC<MangaCardProps> = ({
  className,
  imageUrl,
  name,
  type,
  chapter,
  id
}) => {
  return (
   <Link href={`/mangaItem/${id}`}>
     <div className="flex flex-col gap-[6px] w-[135px]">
      <div className="relative">
        <Image
          className="h-[189px] w-[135px] rounded-md"
          width={135}
          height={189}
          src={imageUrl}
          alt="avatar"
        />
        <div className="absolute left-[6px] bottom-[6px] bg-black/70 text-white py-[3px] px-[6px] text-[12px] rounded">
          chapter {chapter}
        </div>
      </div>

      <Link href="/mang/">
        <div className="text-[14px] font-bold break-words">{name}</div>
        <div className="text-[13px]">{type}</div>
      </Link>
    </div>
   </Link>
  );
};
