"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  className?: string;
  image: string;
  name: string;
  chapter: any;
  id: number;
}

export const LastUpdatesCard: React.FC<Props> = ({
  className,
  image,
  name,
  chapter,
  id,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/mangaItem/${id}`);
  };
  return (
    <div>
      <Link href={`/mangaItem/${id}`}>
        <div className="flex items-center gap-4 pt-4 ">
          <div className="relative rounded-[6px] w-[80px] h-[112px]">
            <Image
              className="rounded-[6px] shadow-custom  w-[80px] h-[112px]"
              src={image}
              width={80}
              height={112}
              alt="image"
            />
            <div className="absolute top-0 left-0 right-0 items-center flex  text-[12px] font-bold bg-updates-gradient text-shadow text-white">
              Маньхуа
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-bold break-words">{name}</span>
            <span className="text-[14px] text-[#212529]">
              Том 1 глава {chapter.length}
            </span>
            <span className="text-[#8a8a8e] text-[11px]">7 минут назад</span>
          </div>
        </div>
        <div className="border-b-[0.1px] pt-4" />
      </Link>
    </div>
  );
};
