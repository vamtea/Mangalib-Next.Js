import { ListChecks, Search } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const CommentsInput: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex w-full gap-[10px]">
      <div className="flex w-full gap-[14px] px-4 py-4 bg-white rounded-[6px] h-[40px] items-center border-[#e5e5e5] border-[1px] hover:border-[#57a3f3] transition-all duration-200 ease-in-out">
        <Search color="#dcdee2" size={20} />
        <input
          type="text"
          placeholder="Фильтр по названию"
          className="w-full  transition-all duration-200 ease-in-out font-normal text-[14px]"
        />
      </div>
      <button className="h-[38px] w-[38px] rounded-[8px] border-[#e5e5e5] border-[1px] bg-white flex items-center justify-center hover:border-[#57a3f3] transition-all duration-200 ease-in-out">
      <ListChecks />
      </button>
    </div>
  );
};
