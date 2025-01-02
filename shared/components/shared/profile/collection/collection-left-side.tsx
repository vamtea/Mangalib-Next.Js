import { Bookmark, UserPen } from 'lucide-react';
import React from 'react';
import { ProfileRadioGroup } from '../radio-group';

interface Props {
    className?: string;
}

const sort = [
  {
    id: 1,
    name: 'Новые',
  },
  {
    id: 2,
    name: 'Популярные за всё время', 
  },
  {
    id: 3,
    name: 'Популярные за год',
  },
  {
    id: 4,
    name: 'Популярные за сезон',
  },
  {
    id: 4,
    name: 'Популярные за неделю',
  },
]

export const CollectionLeftSide: React.FC<Props> = ({ className }) => {
   return (
      <div className="max-h-[385px] sticky top-[72px]   bg-white rounded-[8px] overflow-scroll scrollbar-hide">
      <div className={className}>
        <div>
          <div className="relative py-2 items-center">
            <div className="border-b-[1px] w-full border-[#e5e5e5] absolute top-[18px] z-20 " />
            <div className=" ml-2 text-[14px]  text-[#000000ad] gap-2 px-2 bg-[#ffffff] inline-flex items-center -top-[2px] relative z-30 ">
              Фильтр
            </div>
          </div>
          <div>
            <ul className="flex flex-col w-full  px-[6px] text-[15px] text-black pb-[6px]">
                <li className="flex items-center gap-[10px]  mb-[2px]  font-normal px-2 py-2 cursor-pointer  hover:bg-[#74748010] transition-all duration-200 ease-in-out rounded-[4px]">
                <UserPen size={15} />
                  Мои коллекции
                </li>
                <li className="flex items-center gap-[10px]  mb-[2px]  font-normal px-2 py-2 cursor-pointer  hover:bg-[#74748010] transition-all duration-200 ease-in-out rounded-[4px]">
                <Bookmark size={15} />
                  Избранное
                </li>
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
                <li className="flex align-top break-words items-start gap-[10px]  mb-[2px] text-[16px] px-2 py-2 cursor-pointer hover:bg-[#74748010] transition-all duration-200 ease-in-out rounded-[4px]">
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