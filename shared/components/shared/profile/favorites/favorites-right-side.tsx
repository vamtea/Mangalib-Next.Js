import { Search } from "lucide-react";
import React from "react";
import { FavoritesCard } from "./favorites-card";

interface Props {
  className?: string;
}

export const FavoritesRightSide: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex w-full gap-[10px]">
        <div className="flex w-full gap-[14px] px-4 py-4 bg-white rounded-[6px] h-[40px] items-center border-[#e5e5e5] border-[1px] hover:border-[#57a3f3] transition-all duration-200 ease-in-out">
          <Search color="#dcdee2" size={20} />
          <input
            type="text"
            placeholder="Фильтр по названию"
            className="w-full  transition-all duration-200 ease-in-out font-normal text-[14px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <FavoritesCard />
        <FavoritesCard />
        <FavoritesCard />
        <FavoritesCard />
        <FavoritesCard />
        <FavoritesCard />
      </div>
    </div>
  );
};
