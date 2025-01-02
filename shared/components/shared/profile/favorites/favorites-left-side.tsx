import { Contact, FileUser, ScrollText, User, Users } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

const list = [
  {
    name: "Команды",
    logo: <Users size={16} />,
    id: 1,
  },
  {
    name: "Люди",
    logo: <User size={16} />,
    id: 2,
  },
  {
    name: "Персонажи",
    logo: <Contact size={16} />,
    id: 3,
  },
  {
    name: "Франшизы",
    logo: <ScrollText size={16} />,
    id: 4,
  },
  {
    name: "Издатели",
    logo: <FileUser size={16} />,
    id: 5,
  },
];

export const FavoritesLeftSide: React.FC<Props> = ({ className }) => {
  return (
    <div className="max-h-[570px] sticky top-[72px] w-[230px]  bg-white rounded-[8px] overflow-scroll scrollbar-hide">
      <div className={className}>
        <div>
          <div className="relative py-2 items-center">
            <div className="border-b-[1px] w-full border-[#e5e5e5] absolute top-[18px] z-20 " />
            <div className=" ml-2 text-[14px]  text-[#000000ad] gap-2 px-2 bg-[#ffffff] inline-flex items-center -top-[2px] relative z-30 ">
              Фильтр
            </div>
          </div>
          <div>
            <ul className="flex flex-col w-full  px-[6px] text-[14px] text-black pb-[6px]">
              {list.map((item) => (
                <li className="flex items-center gap-[10px]  mb-[2px]  font-normal px-2 py-2 cursor-pointer  hover:bg-[#74748010] transition-all duration-200 ease-in-out rounded-[4px]">
                  {item.logo}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};
