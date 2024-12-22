import { Bookmark, Eye, Layers, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import image2 from "@/shared/img/image-2.jpg";
import image3 from "@/shared/img/image-3.jpg";
import image4 from "@/shared/img/image-4.jpg";

interface Props {
  className?: string;
}
 const CollectionSectionCard: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-white flex flex-col  justify-center items-center rounded-[20px]">
      <div className="flex flex-col p-[18px] items-center gap-[10px] w-[236px]">
      <div className="text-[15px] font-semibold break-words text-center">Экстрасенсорные способности</div>
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
        <div className="flex h-[100px] overflow-hidden pt-[10px] pl-[10px] mt-[21px]">
          <div className="transform -rotate-12">
            <Image alt="avatar" src={image4} className="rounded-[6px] h-[112px] w-[80px]" />
          </div>
          <div className="-ml-[30px] mt-[10px] mb-[30px] rounded-[6px] z-10 ">
            <Image alt="avatar" src={image2} className="z-0 rounded-[6px] border-[#fff] border-[4px]  h-[112px] w-[80px]" />
          </div>
          <div className="-ml-[35px] transform rotate-12 mt-[30px] rounded-[6px] z-20">
            <Image alt="avatar" src={image3} className="rounded-[6px] h-[112px]  border-[#fff] border-[4px] w-[80px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSectionCard;