import Image from "next/image";
import React from "react";

import image2 from "@/shared/img/image-2.jpg";
import { Mail, Trash2 } from "lucide-react";
interface Props {
  className?: string;
}

export const FriendsCard: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex justify-between pr-3 gap-[12px] border-[1px] border-[#e5e5e5] rounded-[8px] items-center">
     <div className="flex gap-[12px] items-center" >
     <Image
        className="w-[56px] h-[56px] object-cover rounded-l-[8px]"
        src={image2}
        alt="image"
        width={56}
        height={56}
      />
      <div className="flex flex-col gap-[6px]">
        <span className="text-[14px] font-semibold hover:underline cursor-pointer">#Senpai</span>
        <p className="text-[#8a8a8] text-[12px]">14.03.2022</p>
      </div>
     </div>
      <div className="flex gap-[6px] items-center">
        <div className="w-[32px] h-[32px] hover:bg-[#c5116213] items-center flex justify-center rounded-[50%]">
          <Mail size={16} />
        </div>
        <div className="w-[32px] h-[32px] rounded-[50%] hover:bg-[#f443361e] items-center flex justify-center cursor-pointer">
          <Trash2 color="#f44336" size={16} />
        </div>
      </div>
    </div>
  );
};
