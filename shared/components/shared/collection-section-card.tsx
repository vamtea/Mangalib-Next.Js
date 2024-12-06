import { Bookmark, Eye, Layers, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import image from "@/shared/img/avatar.jpg";
import image2 from "@/shared/img/image-2.jpg";
import image3 from "@/shared/img/image-3.jpg";

interface Props {
  className?: string;
}

export const CollectionSectionCard: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-white">
      <div className="text-[15px] font-semibold">Экстрасенсорные способности</div>
      <div>
        <ul className="flex gap-[6px] text-[12px] text-[#8a8a8e] items-center">
          <li className="flex items-center bg-[#7474800d] py-[2px] px-2 rounded-[6px] gap-2">
            <Eye size={14} /> 2
          </li>
          <li className="flex items-center bg-[#7474800d] py-[2px] px-2 rounded-[6px] gap-2">
            <Layers size={14} /> 60
          </li>
          <li className="flex items-center bg-[#7474800d] py-[2px] px-2 rounded-[6px] gap-2">
            <Bookmark size={14} /> 0
          </li>
          <li className="flex items-center bg-[#7474800d] py-[2px] px-2 rounded-[6px] gap-2">
            <Star size={14} /> 0/0
          </li>
        </ul>
      </div>
      <div>
        <div className="flex">
          <div className="transform -rotate-12">
            <Image alt="avatar" src={image} className="rounded-[6px] h-[112px] w-[80px]" />
          </div>
          <div className="-ml-[30px] mt-[30px] mb-[30px] z-0 rounded-[6px] border-[#fff] border-[4px]">
            <Image alt="avatar" src={image2} className="rounded-[6px] h-[112px] w-[80px]" />
          </div>
          <div className="-ml-[35px] transform rotate-12 mt-[60px] rounded-[6px] border-[#fff] border-[4px]">
            <Image alt="avatar" src={image3} className="rounded-[6px] h-[112px] w-[80px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
