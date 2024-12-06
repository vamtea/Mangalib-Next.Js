import Image from "next/image";
import React from "react";
import image from "@/shared/img/avatar.jpg";
import { Eye, Smile, Text, ThumbsUp } from "lucide-react";

interface Props {
  className?: string;
}

export const ReviewSectionCards: React.FC<Props> = ({ className }) => {
  return (
    <div className="rounded-[8px] flex flex-col">
      <div className=" h-[83.828px] w-full relative">
        <Image src={image} className="rounded-t-lg object-cover" layout="fill"  alt="avatar" />
      </div>
      <div className="flex flex-col bg-white py-3 px-3 gap-[10px] rounded-b-lg">
        <div className="flex gap-4">
          <div className=" flex gap-[6px] text-[#8a8a8e] text-[13px] font-normal">
            <div>
              <Text color="#8a8a8e" size={14} className="-bottom-4" />
            </div>
            Отзыв
          </div>
          <div className=" flex gap-[6px] text-[#8a8a8e] text-[13px] font-normal">
            <Smile color="#3cce7b" size={14} />
            Положительный
          </div>
        </div>
        <div className="text-[#212529] text-[15px] font-semibold break-words text-wrap">
          Историю о буднях двух школьных друзей ueeeeeeeeeeeeeeeeeeeeeeeee
        </div>
        <p className="text-[14px] text-[#8a8a8e]">
          Эта история о двух школьных друзьях — настоящая находка для тех, кто
          ценит искренние и многогранные отношения. Повествование одновременно
          весёлое и грустное.
        </p>
        <div className=" flex justify-between text-[#8a8a8e]">
          <div className="flex gap-4">
            <div className="flex gap-2 text-[12px]">
              <Eye size={14} /> 17
            </div>

            <div className="flex gap-2 text-[12px]">
              <ThumbsUp  size={14} /> 0
            </div>
          </div>
          <span className="text-[#8a8a8e] text-[12px]"> 3 часа назад</span>
        </div>
      </div>
    </div>
  );
};
