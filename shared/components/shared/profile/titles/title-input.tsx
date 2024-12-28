import { Search } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const TitleInput: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex w-full gap-[14px] px-4 py-4 ">
        <Search color="#dcdee2" size={20} />
        <input
          type="text"
          placeholder="Поиск тайтлов"
          className="w-full  transition-all duration-200 ease-in-out font-normal text-[14px]"
        />
      </div>
    </div>
  );
};
