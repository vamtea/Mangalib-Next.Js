import React from 'react';
import { Cards } from './cards';
import { mangaItem } from '@/shared/services/mangaItem';
import { MangaItem } from '@prisma/client';

interface Props {
    className?: string;
}

export const NewColumn: React.FC<Props> = ({ className }) => {
  const [mangaItems, setMangaItems] = React.useState<MangaItem[]>([])

   React.useEffect(() => {
      const fetchData = async () => {
        try {
          const items = await mangaItem();
          setMangaItems(items);
          console.log(items)
        } catch (error) {
          console.error('Error fetching manga items:', error);
        }
  
      }
  
      fetchData();
    }, [])
  return (
    <div>
        <span  className="py-2 px-4 text-[#8a8a8e] text-[15px] font-bold">Новинки</span>
        {/* <Cards />
        <Cards />
        <Cards /> */}
        {
        mangaItems.filter((item, index) => [0, 2, 4].includes(index)).map((item) => (
          <Cards
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            type={item.type}
          />
        ))
        }
    </div>
  );
};