import { data } from "@remix-run/router/dist/utils";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import React from "react";
import image from "@/shared/img/image-2.jpg";
import Link from "next/link";

interface TitleMangaProps {
  name: string;
  chapter: number;
  data: number;
  imageUrl: string;
  id: number;
}

export const TitleMangaCard: React.FC<TitleMangaProps> = ({ id, name, chapter, data, imageUrl }) => {
  
  return (
    <>
      <div className="py-2 px-4 flex items-center">
        <div className="h-[87px] w-[62px] rounded-[6px]">
          <Image
            className="object-cover rounded-[6px]"
            src={imageUrl}
            width={62}
            height={87}
            alt="image"
          />
        </div>
        <div className="flex flex-col gap-[10px] ml-4  flex-grow-1 flex-1">
          <Link href={`/mangaItem/${id}`}>
            <span className="text-[16px] font-semibold">{name}</span>
          </Link>
          <p className="text-[14px] text-[#aaaaaa] hover:underline ">
            Продолжить/начать 0 / {chapter}
          </p>
        </div>

        <div className="flex flex-col px-3">
          <span className="text-[#aaaaaa] text-[13px]">Добавлено</span>
          <span className="text-[#212529] text-[13px]">{data}</span>
        </div>
        <div className="min-w-[120px] text-right">
          <button className="w-[26px] h-[26px] rounded-[6px] items-center hover:bg-[#aaaaaa54] align-middle  transition-all duration-200 ease-in-out">
            <Ellipsis className=" flex justify-center w-full" size={14} />
          </button>
        </div>
      </div>
      <div className="bg-[#e5e5e5] w-full  h-[1px] ml-[94px]" />
    </>
  );

};
