import React from "react";
import { ProfileRadioGroup } from "../radio-group";

interface Props {
  className?: string;
}

const filter = [
    {
        name: "Все",
        id: 1
    },
    {
        name: "К манге или ронабе",
        id: 2
    },
    {
        name: "К аниме",
        id: 3
    },
    {
        name: "К главе",
        id: 4
    },
    {
        name: "К эпизоду",
        id: 5
    },
    {
        name: "К коллекции",
        id: 6
    },
    {
        name: "К отзыву",
        id: 7
    },
    {
        name: "К новости",
        id: 8
    },
]
const sort = [
    {
        name: "По времени",
        id: 1
    },
    {
        name: "По рейтингу",
        id: 2
    },
    
]
const sortBy = [
    {
        name: "По убыванию",
        id: 1
    },
    {
        name: "По возрастанию",
        id: 2
    },
    
]

export const CommentsLeftSide: React.FC<Props> = ({ className }) => {
  return (
    <div className="max-h-[570px] sticky top-[72px]   bg-white rounded-[8px] overflow-scroll scrollbar-hide">
    <div className={className}>
      <div>
        <div className="relative py-2 items-center">
          <div className="border-b-[1px] w-full border-[#e5e5e5] absolute top-[18px] z-20 " />
          <div className=" ml-2 text-[14px]  text-[#000000ad] gap-2 px-2 bg-[#ffffff] inline-flex items-center -top-[2px] relative z-30 ">
            Фильтр
          </div>
        </div>
        <div>
          <ul className="flex flex-col w-full  px-[6px] text-[17px] text-black pb-[6px]">
            {filter.map((item) => (
              <li className="flex items-center gap-[10px]  mb-[2px]  font-normal px-2 py-2 cursor-pointer  hover:bg-[#74748010] transition-all duration-200 ease-in-out rounded-[4px]">
                <ProfileRadioGroup
                  radioName="sort"
                  name={item.name}
                  id={item.id}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="relative py-2 items-center">
          <div className="border-b-[1px] w-full border-[#e5e5e5] absolute top-[18px] z-20 " />
          <div className=" ml-2 text-[14px]  text-[#000000ad] gap-2 px-2 bg-[#ffffff] inline-flex items-center -top-[2px] relative z-30 ">
            Сортировка
          </div>
        </div>
        <div>
          <ul className="flex flex-col w-full px-[6px] pb-[6px]">
            {sort.map((item) => (
              <li className="flex items-center gap-[10px]  mb-[2px] text-[15px] px-2 py-2 cursor-pointer hover:bg-[#74748010] transition-all duration-200 ease-in-out rounded-[4px]">
                <ProfileRadioGroup
                  radioName="sort"
                  name={item.name}
                  id={item.id}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className=" pl-[38px] py-1 w-full  items-center">
          <div className="border-b-[#e5e5e5] border-b-[1px]" />
        </div>
        <div>
          <ul className="flex flex-col w-full px-[6px] pb-[6px]">
            {sortBy.map((item) => (
              <li className="flex items-center gap-[10px]  mb-[2px] text-[15px] px-2 py-2 cursor-pointer hover:bg-[#74748010] transition-all duration-200 ease-in-out rounded-[4px]">
                <ProfileRadioGroup
                  radioName="sort"
                  name={item.name}
                  id={item.id}
                />
              </li>
            ))}
          </ul>
        </div>
        
       
      </div>
    </div>

    </div>
  );
};
