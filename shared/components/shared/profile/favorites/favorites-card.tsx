import { Trash2 } from "lucide-react";
import React from "react";
import Image from "next/image";
import image from "@/shared/img/image-4.jpg";

interface Props {
  className?: string;
}

export const FavoritesCard: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-white p-[8px] rounded-[6px] gap-[12px] flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <Image className="object-cover rounded-[6px] shadow-translateCard h-[56px] w-[40px]" src={image} alt="image" width={40} height={56} />
        <div className="font-semibold text-[14px] hover:underline cursor-pointer">Virat</div>
      </div>

      <div className="w-[32px] h-[32px] rounded-[50%] bg-[#f443361e] items-center flex justify-center hover:bg-[#f4433634] cursor-pointer">
        <Trash2 color="#f44336" size={16} />
      </div>
    </div>
  );
};
