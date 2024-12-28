import React from 'react';
import { mangaItem } from '@/shared/services/mangaItem'
import { MangaItem } from '@prisma/client';
import { SliderCards } from '.';

interface Props {
    className?: string;
}

export const MangaItems: React.FC<Props> = ({ className }) => {
    const [mangaItems, setMangaItems] = React.useState<MangaItem[]>([]);
    React.useEffect(() => {
    
     const fetch = async () => {
       const mangaItemArr = await mangaItem();
       console.log(mangaItemArr);
       console.log("mangaItemArr");
       setMangaItems(mangaItemArr)
     }
     fetch()
    }, [])
  return (
    <div className={className}>
         {mangaItems.map((item, index) => (
          <SliderCards
          id={item.id}
            key={index}
            imageUrl={item.imageUrl}
            name={item.name}
            type={item.type}
            chapter={item.id}
          />
        ))}
    </div>
  );
};