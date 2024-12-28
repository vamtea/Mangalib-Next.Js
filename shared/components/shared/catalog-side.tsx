'use client'


import React from "react";
import { Input } from "../ui/input";
import { ArrowDownNarrowWide, ChevronDown, Search } from "lucide-react";
import { CatalogSideCard } from "./catalog-side-card";
import { mangaItem } from "@/shared/services/mangaItem";
import { Chapter, MangaItem } from "@prisma/client";
import { chapter } from "@/shared/services/chapter";

interface Props {
  className?: string;
}

export const CatalogSide: React.FC<Props> = ({ className }) => {
    const [mangaItems, setMangaItems] = React.useState<MangaItem[]>([])
  // const [chapters, setChapters] = React.useState<Chapter[]>([])
    
       React.useEffect(() => {
          const fetchManga = async () => {
            try {
              const items = await mangaItem();
              setMangaItems(items);
              console.log(items)
            } catch (error) {
              console.error('Error fetching manga items:', error);
            }
      
          }
          // const fetchChapter = async () => {
          //   try {
          //     const items = await chapter();
          //     setChapters(items);
          //     console.log(items)
          //   } catch (error) {
          //     console.error('Error fetching chapter items:', error);
          //   }
      
          // }
      
          // fetchChapter();
          fetchManga()
        }, [])
  
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
          {
            mangaItems.map((item, index) => (
              <CatalogSideCard 
              key={index}
              name={item.name}
              imageUrl={item.imageUrl}
              type={item.type}
              
              />
            ))
          }
          {/* <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard />
          <CatalogSideCard /> */}
        </div>
      </div>
    </div>
  );
};
