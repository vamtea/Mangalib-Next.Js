import React from "react";
import Image from "next/image";
import Link from "next/link";

import image from "@/shared/img/image-3.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

interface Props {
  className?: string;
  //   id: number;
}

export const CommentsCard: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div className=" px-4">
        <div className="flex w-full pt-3 mb-[6px]">
          <span className="text-[#8a8a8e] mr-[6px] text-[14px] font-medium">
            Тайтл:
          </span>
          <Link href={`/mangaItem/${1}`}>
            <p className="text-[#212529] font-medium text-[14px] cursor-pointer hover:text-[#ff6d00]">
              Нань Хао и Шан Фэнь
            </p>
          </Link>
          <p className="px-[6px]">–</p>
          <p className="text-[#212529] font-medium text-[14px] cursor-pointer hover:text-[#ff6d00]">
            Том 1 Глава 4
          </p>
        </div>

        <div className="flex flex-col py-[10px]">
          <div className="flex gap-[10px]">
            <Image
              src={image}
              className="w-[24px] h-[24px] object-cover rounded-[3px]"
              alt="image"
              width={24}
              height={24}
            />
            <div className="flex gap-[10px] items-center">
              <span className="text-[#212529] font-semibold text-[14px] hover:text-[#ff6d00] hover:underline cursor-pointer">
                #Senpai
              </span>
              <p className="text-[#8a8a8e] text-[12px] font-normal ">
                {" "}
                5 лет назад{" "}
              </p>
            </div>
          </div>
          <div className="mt-[10px] text-[14px] break-words w-full">
            ksssssssssssssssssssssssssssssssssssssssss
          </div>
          <div className="flex justify-between gap-[12px] mt-[8px]">
            <button className="text-[#ff6d00] text-[14px] font-normal hover:text-[#ff9100] ">
              жалоба
            </button>
            <button className="text-[14px] font-normal text-[#8a8a8e] px-[10px]">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>0</TooltipTrigger>
                  <TooltipContent
                    className="bg-white py-1 px-2  rounded-[6px]  shadow-catalogDropShadow"
                  >
                    <p> 0 плюсов, 0 минусов</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] w-full border-[#e5e5e5]" />
    </>
  );
};
