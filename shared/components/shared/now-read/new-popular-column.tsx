import React from 'react';
import { Cards } from './cards';
import { MangaItem } from '@prisma/client';
import { mangaItem } from '@/shared/services/mangaItem';

interface Props {
    className?: string;
}

export const NewPopularColumn: React.FC<Props> = ({ className }) => {

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
        <span  className="py-2 px-4 text-[#8a8a8e] text-[15px] font-bold"> Набирающее популярность</span>
        {
          mangaItems.filter((item, index) => [1, 3, 5].includes(index)).map((item) => (
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