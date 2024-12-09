import React from "react";
import { Input } from "../ui/input";
import { ArrowDownNarrowWide, ChevronDown, Search } from "lucide-react";
import { CatalogSideCard } from "./catalog-side-card";

interface Props {
  className?: string;
}

export const CatalogSide: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-white rounded-[8px]">
      <div className="flex flex-col">
        <div className="px-4 pb-2 pt-3 flex flex-col gap-3">
          <div className="flex justify-between ">
            <span className="text-[20px] font-semibold">Каталог</span>
            <div className="flex mx-4 text-[13px] px-[10px]  border-[#dcdee2] border-[1px] rounded-[6px] gap-2 items-center ">
              <ArrowDownNarrowWide size={16} />
              По популярности
              <ChevronDown size={16} />
            </div>
          </div>
          <div className="flex items-center bg-white border-[#dcdee2] border-[1px] rounded-[5px] py-[4px] gap-2">
            <div className="pl-2 items-center flex justify-center">
              <Search color="#8a8a8e" size={16} />
            </div>
            <input
              className="outline-none text-[14px]"
              type="text"
              placeholder="Поиск по названию"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 px-2 pb-1">
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
        </div>
      </div>
    </div>
  );
};
