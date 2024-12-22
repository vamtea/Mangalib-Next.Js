import React from "react";
import { ArrowLeft } from "lucide-react";
import question from "@/shared/img/question mark.svg";
import { Checkbox } from "../../ui";

interface Props {
  className?: string;
  onClickBack?: () => void;
}

const GenreDrawerHeader: React.FC<Props> = ({ className, onClickBack }) => {
  return (
    <div className={className}>
      <div className="flex justify-between px-[12px] h-10">
        <button
          onClick={() => onClickBack}
          className="flex gap-[10px] font-semibold items-center text-[14px]"
        >
          <ArrowLeft size={14} /> Жанры
        </button>
        <button className="border-none text-[14px]">сбросить</button>
      </div>
      <div className="w-full bg-[#e5e5e5] h-[1px] " />

      <div className="py-[5px] px-[18px] text-[14px] text-[#2125297a] h-[40px] flex items-center  font-semibold">
        Фильтр по жанрам
      </div>

      <div className="w-full bg-slate-200 h-[1px] " />

      <div className="flex justify-between py-2 px-3">
        <div className="flex gap-[10px] items-center">
          <Checkbox id={`checkbox`} checked={true} />
          <label htmlFor={`checkbox`}>
            <span className="text-[14px] font-normal text-[#212529]">
              Строгое совпадение
            </span>
          </label>
        </div>
        <div>
          {/* <CircleHelp />  */}
          <div className="w-[26px] h-[26px] border-[50%] bg-[#007deb1e] rounded-full flex items-center justify-center text-[#007deb]">
            ?
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-200 h-[1px] " />
    </div>
  );
};

export default GenreDrawerHeader;
