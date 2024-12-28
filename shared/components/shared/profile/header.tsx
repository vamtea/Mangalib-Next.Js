'use client'


import React from "react";
import Image from "next/image";
import { ChevronDown, Ellipsis, Info, Settings } from "lucide-react";
import Link from "next/link";
import image from "@/shared/img/avatar.jpg";
import image2 from "@/shared/img/image-4.jpg";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [active, setActive] = React.useState(false);

  const userAbb = [
    {
      name: "Тайтлы",
      id: 1,
    },
    {
      name: "Комментарии",
      id: 2,
    },
    {
      name: "Коллекции",
      id: 3,
    },
    {
      name: "Отзывы",
      id: 4,
    },
    {
      name: "Избранное",
      id: 5,
    },
    {
      name: "Друзья",
      id: 6,
    },
    {
      name: "История просмотров",
      id: 7,
    },
  ];

  return (
    <div className="mt-4">
      {/* top */}
      <div className="max-h-[350px] w-full relative rounded-t-[8px]">
       <div className="absolute h-[26px] text-[13px] items-center align-middle font-normal bg-white rounded-[6px] px-[10px] right-4 top-2">
       <button onClick={() => setActive(!active)} className="flex gap-[8px] align-middle items-center mt-[4px]">
          Показать фон
          <ChevronDown size={13} /> 
        </button>
       </div>
        <Image className={cn("max-h-[350px] w-full object-cover rounded-t-[8px]", {
           "max-h-[42px]  w-full object-cover rounded-t-[8px]" : active === true
        }, className)} src={image2} width={30} height={30} alt="image" />
      </div>

      {/* bottom */}
      <div className="bg-white rounded-b-[8px]">

        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex gap-4 align-center ">
            <div className="w-[50px] h-[50px] relative rounded-[4px]">
              <Image
                className="object-cover"
                src={image}
                width={50}
                height={50}
                alt="avatar"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-4 break-words text-ellipsis max-w-[220px] font-bold">
                Гопник и без перчаток
              </span>
              <span className="text-[#8a8a8e] text-[13px]">
                Уровень 19 • Топ #Не определён
              </span>
            </div>
          </div>
          <button className="rounded-[6px] text-[13px] font-normal bg-[#0000000c] h-[26px] block align-items">
            <Link className="px-[10px]  flex gap-2 font-medium items-center"  href="/settings">
              <Settings size={13} className="-mt-[3px]" /> Настройки
            </Link>
          </button>
        </div>

        <div className="border-b-[1px] w-full " />

        <div className="flex justify-between px-[16px]">
          <ul className="flex text-[15px] gap-4 items-center ">
            {userAbb.map((item) => (
              <li className="cursor-pointer py-[12px] text-[#212529] opacity-[.8px]" key={item.id}>{item.name}</li>
            ))}
            <li className="py-[12px] cursor-pointer text-[#212529] opacity-[.8px]">
              <Ellipsis size={15} />
            </li>
          </ul>
          <div className="flex text-[14px] font-normal gap-2 items-center cursor-pointer ">
            Информация о пользователей
            <Info size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};
