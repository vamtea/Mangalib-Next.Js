"use client";

import { cn } from "@/shared/lib/utils";
import { Search } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

const list = [
  {
    name: "Список друзей",
    id: 1,
  },
  {
    name: "Заявки в друзья",
    id: 2,
  },
  {
    name: "Отправленные запросы",
    id: 3,
  },
];

export const FriendsHeader: React.FC<Props> = ({ className }) => {
  const [active, setActive] = React.useState(1);
  return (
    <div className="p-[16px] flex flex-col gap-4">
      <ul className="flex gap-4 ">
        {list.map((item) => (
          <li
            onClick={() => setActive(item.id)}
            className={cn(
              "cursor-pointer py-[5px] px-[10px] hover:bg-[#e9e9e954] rounded-[8px] text-[14px] font-medium ",
              {
                "border-[1px] border-[#e9e9e9] shadow-friends hover:bg-white":
                  active === item.id,
              }
            )}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className="flex w-full gap-[10px]">
        <div className="flex w-full gap-[14px] px-4 py-4 bg-white rounded-[6px] h-[40px] items-center border-[#e5e5e5] border-[1px] hover:border-[#57a3f3] transition-all duration-200 ease-in-out">
          <Search color="#dcdee2" size={20} />
          <input
            type="text"
            placeholder="Поиск по имени"
            className="w-full  transition-all duration-200 ease-in-out font-normal text-[14px]"
          />
        </div>
      </div>
    </div>
  );
};
