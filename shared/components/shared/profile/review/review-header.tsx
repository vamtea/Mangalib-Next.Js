"use client";

import { FiletrCheckbox } from "@/shared/components/ui";
import { ChevronsUpDown, Frown, Meh, Search, Smile, Text } from "lucide-react";
import React from "react";
import { FiltersCheckboxCard } from "../..";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

const list = [
  {
    name: "Все",
    id: 1,
  },
  {
    name: "Положительные",
    logo: <Smile size={15} />,
    id: 2,
  },
  {
    name: "Отрицательные",
    logo: <Frown size={15} />,
    id: 3,
  },
  {
    name: "Нейтральные",
    logo: <Meh size={15} />,
    id: 4,
  },
];

export const ReviewHeader: React.FC<Props> = ({ className }) => {
  const [active, setActive] = React.useState(1);
  return (
    <div className="rounded-t-[8px]">
      <ul className="items-center flex justify-between h-[46px] rounded-t-[8px]">
        {list.map((item) => (
          <li
            onClick={() => setActive(item.id)}
            key={item.id}
            className={cn(
              "flex gap-[6px] items-center text-[14px] justify-center cursor-pointer hover:bg-[#f2f2f3] bg-[#c3c3cf28] w-full h-full",
              {
                "bg-white hover:bg-white": active === item.id,
              }
            )}
          >
            {item.logo}
            <span>{item.name}</span>
            <span>3</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-between p-3 bg-white ">
        <div className="flex w-full gap-[10px]">
          <div className="flex w-[300px] gap-[14px] px-4 py-4 bg-white rounded-[6px] h-[40px] items-center border-[#e5e5e5] border-[1px] hover:border-[#57a3f3] transition-all duration-200 ease-in-out">
            <Search color="#dcdee2" size={20} />
            <input
              type="text"
              placeholder="Фильтр по названию"
              className="w-full  transition-all duration-200 ease-in-out font-normal text-[14px]"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FiltersCheckboxCard className="items-center" title="Черновик" text="Черновик" value={1} />
          <button className="flex text-[14px] font-normal gap-[8px] border-[1px] px-[14px] border-[#dcdee2] h-[30px] items-center rounded-[6px]">
            <ChevronsUpDown size={16} />
            Новые
          </button>
          <button className="flex text-[14px] font-normal gap-[8px] border-[1px] px-[14px] border-[#dcdee2] h-[30px] items-center rounded-[6px]">
            <Text size={16} />
            Любые
          </button>
        </div>
      </div>
    </div>
  );
};
