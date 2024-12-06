import React from "react";
import { Input } from "../ui/input";
import { ArrowDownNarrowWide, ChevronDown, Search } from "lucide-react";
import { CatalogSideCard } from "./catalog-side-card";

interface Props {
  className?: string;
}

export const CatalogSide: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-white">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span className="text-[20px] font-semibold">Каталог</span>
          <div className="flex text-[13px] px-[10px]  border-[#dcdee2] border-[1px] rounded-[6px] gap-2 items-center ">
            <ArrowDownNarrowWide size={16} />
            По популярности
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="flex items-center bg-white border-[#dcdee2] border-[1px] py-[5px]">
          <div className="w-[32px] h-[32px] items-center flex justify-center">
          <Search color="#8a8a8e" size={20} />
          </div>
          <input
            className="outline-none"
            type="text"
            placeholder="Поиск по названию"
          />
        </div>
        <div className="grid-cols-5">
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
