'use client'


import React from "react";
import { NewSectionCard } from "./new-section-card";
import { ArrowRight } from "lucide-react";
import { mangaItem } from "@/shared/services/mangaItem";
import { MangaItem } from "@prisma/client";

interface Props {
  className?: string;
}

export const NewSection: React.FC<Props> = ({ className }) => {
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
            fetchManga()
          }, [])
    
  return (
    <div className={className}>
      <div className="flex items-center gap-2 pl-4 mt-5 mb-2 ">
        <span className="text-[15px] font-bold">Новинки</span>
        <ArrowRight color="#000000" size={17} />
      </div>
      <div className=" px-4 py-[12px] bg-white flex overflow-scroll gap-4 w-[540px] rounded-[8px] ">
        {
          mangaItems.map((item) => (
            <NewSectionCard 
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            type={item.type}
            />
          ))
        }
      </div>
    </div>
  );
};
