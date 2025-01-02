import { LayoutGrid, List, Pencil, Settings } from "lucide-react";
import React from "react";
import { ProfileRadioGroup } from "../radio-group";

interface Props {
  className?: string;
}

export const TitleLeftSide: React.FC<Props> = ({ className }) => {
  const library = [
    {
      name: "Все",
      id: 1,
    },
    {
      name: "Читаю",
      id: 2,
    },
    {
      name: "В планах",
      id: 3,
    },
    {
      name: "Брошено",
      id: 4,
    },
    {
      name: "Прочитано",
      id: 5,
    },
    {
      name: "Любимые",
      id: 6,
    },
  ];
  const sort = [
    {
      name: "По названию (A-Z)",
      id: 1,
    },
    {
      name: "По названию (A-Я)",
      id: 2,
    },
    {
      name: "Дате добавления",
      id: 3,
    },
    {
      name: "Дате добавления глав",
      id: 4,
    },
    {
      name: "Дате чтения",
      id: 1,
    },
  ];
  const sortBy = [
    {
      name: "По убыванию",
      id: 1,
    },
    {
      name: "По возрастанию",
      id: 2,
    },
  ];
  return (
      <div className="max-h-[calc(100vh-88px)] sticky top-[72px]   bg-white rounded-[8px] overflow-scroll scrollbar-hide">
      <div className="">
        <div className="relative py-2 items-center">
          <div className="border-b-[1px] w-full border-[#e5e5e5] absolute top-[18px] z-20 " />
          <div className=" cursor-pointer ml-2 text-[14px] hover:text-[#000000] text-[#000000ad] gap-2 px-2 bg-[#ffffff] inline-flex items-center -top-[2px] relative z-30 ">
            Списки
            <Settings size={15} />
          </div>
        </div>

        <div className="flex flex-col">
          <ul className="flex flex-col w-full px-[6px] pb-[6px]">
            {library.map((item) => (
              <li className="flex justify-between mb-[2px] text-[15px] px-2 py-1 cursor-pointer hover:bg-[#7474801e] rounded-[4px]">
                {item.name}{" "}
                <span className="text-[#212529] opacity-[.7] ml-[10px] text-[14px]">
                  0
                </span>
              </li>
            ))}
            <li className="flex text-[#8a8a8e] items-center justify-between mb-[2px] text-[15px] px-2 py-1 cursor-pointer hover:bg-[#7474801e] rounded-[4px]">
              Редактировать... <Pencil size={14} />
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="relative py-2 items-center">
          <div className="border-b-[1px] w-full border-[#e5e5e5] absolute top-[18px] z-20 " />
          <div className=" ml-2 text-[14px]  text-[#000000ad] gap-2 px-2 bg-[#ffffff] inline-flex items-center -top-[2px] relative z-30 ">
            Вид
          </div>
        </div>
        <div>
          <ul className="flex flex-col w-full px-[6px] pb-[6px]">
            <li className="flex items-center gap-[10px]  mb-[2px] text-[15px] px-2 py-1 cursor-pointer hover:bg-[#7474801e] rounded-[4px]">
              <List size={16} />
              Список
            </li>
            <li className="flex items-center gap-[10px]  mb-[2px] text-[15px] px-2 py-1 cursor-pointer hover:bg-[#7474801e] rounded-[4px]">
              <LayoutGrid size={16} />
              Плитка
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="relative py-2 items-center">
          <div className="border-b-[1px] w-full border-[#e5e5e5] absolute top-[18px] z-20 " />
          <div className=" ml-2 text-[14px]  text-[#000000ad] gap-2 px-2 bg-[#ffffff] inline-flex items-center -top-[2px] relative z-30 ">
            Сортировка
          </div>
        </div>
        <div>
          <ul className="flex flex-col w-full px-[6px] pb-[6px]">
            {sort.map((item) => (
              <li className="flex items-center gap-[10px]  mb-[2px] text-[15px] px-2 py-1 cursor-pointer hover:bg-[#7474801e] rounded-[4px]">
                <ProfileRadioGroup radioName="sort" name={item.name} id={item.id} />
              </li>
            ))}
          </ul>
        </div>
        <div className=" pl-[38px] py-1 w-full  items-center">
          <div className="border-b-[#e5e5e5] border-b-[1px]" />
        </div>
        <ul className="flex flex-col w-full px-[6px] pb-[6px] mt-[6px]">
          {sortBy.map((item) => (
            <li className="flex items-center gap-[10px]  mb-[2px] text-[15px] px-2 py-1 cursor-pointer hover:bg-[#7474801e] rounded-[4px]">
              <ProfileRadioGroup radioName="sortBy" name={item.name} id={item.id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
