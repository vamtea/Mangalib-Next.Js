// "use client";

// import React from "react";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/shared/components/ui/carousel";
// import { Container, MangaItems, SliderCards } from ".";
// import { MangaCardSkeleton } from "./manga-card-skeleton";
// import { Chapter, MangaItem } from "@prisma/client";
// // import { Api } from "@/shared/services/api-client";
// import { mangaItem } from "@/shared/services/mangaItem";
// import { GetServerSideProps } from "next";


// export const getServerSideProps: GetServerSideProps = async () => {
//   const mangaItems = await mangaItem();

//   return {
//     props: { mangaItems }, // Передача данных в компонент
//   };
// };

// interface Props {
//   className?: string;
//   mangaItems: MangaItem[];
// }

// export const Slider: React.FC<Props> = ({ className }) => {
//   const [mangaItems, setMangaItems] = React.useState<MangaItem[]>([]);

//   console.log(mangaItems)
//   const [loading, setLoading] = React.useState(true);
//   const [chapter, setChapter] = React.useState<Chapter[]>([]);

//   // React.useEffect(() => {
//   //   const fetchData = async () => {
//   //     const data = await prisma.mangaItem.findMany();

//   //     console.log(data); // Убедитесь, что данные получены
//   //     setMangaItem(data); // Сохраняем данные в state
//   //   };

//   //   fetchData();
//   // }, [mangaItem]);

//   // React.useEffect(() => {
//   //   const fetchData = async () => {
//   //       try {
//   //       const response = await fetch("/api/mangaItem");
//   //       const data = await response.json();
//   //       setMangaItem(data);

//   //       console.log(data);
//   //       setMangaItem(data); // Устанавливаем всё сразу
//   //     } catch (error){
//   //       console.error(error)
//   //     };
//   //   }

//   //   fetchData();
//   // }, []);

//   React.useEffect(() => {
//     const fetch = async () => {
//       const mangaItemArr = await mangaItem();
//       console.log(mangaItemArr);
//       console.log("mangaItemArr");
//       setMangaItems(mangaItemArr);
//     };
//     fetch();
//   }, []);

//   return (
//     // <Carousel>
//     //   <CarouselContent className="-ml-2 md:-ml-4">
//     //     <CarouselPrevious />
//     //     <CarouselItem className="pl-2 md:pl-4">Hello</CarouselItem>
//     //     <CarouselItem className="pl-2 md:pl-4">how</CarouselItem>
//     //     <CarouselItem className="pl-2 md:pl-4">are you</CarouselItem>
//     //     <CarouselNext />
//     //   </CarouselContent>
//     // </Carousel>
//     // <Container>
//     //   <div className="flex gap-4 py-3 px-4 bg-white mt-[16px] mb-[20px] rounded-lg">
//     //     {/* <div className="flex gap-4">
//     //     {
//     //       [...new Array(8)].map((_, index) => (
//     //           <MangaCardSkeleton key={index} />
//     //       ))
//     //     }
//     //     </div> */}
//     //     {mangaItems.length === 0 ? (
//     //       <div className="flex gap-4">
//     //         {[...new Array(8)].map((_, index) => (
//     //           <MangaCardSkeleton key={index} />
//     //         ))}
//     //       </div>
//     //     ) : 
//     //     (
//     //       mangaItems.map((item, index) => (
//     //         <SliderCards
//     //           id={item.id}
//     //           key={index}
//     //           imageUrl={item.imageUrl}
//     //           name={item.name}
//     //           type={item.type}
//     //           chapter={item.id}
//     //         />
//     //       ))
//     //     )
//     //     }
//     //     {/* <SliderCards id={1} imageUrl="" name="" type="" chapter={1} />
//     //     <SliderCards id={2} imageUrl="" name="" type="" chapter={1} />
//     //     <SliderCards id={3} imageUrl="" name="" type="" chapter={1} />
//     //     <SliderCards id={4} imageUrl="" name="" type="" chapter={1} />
//     //     <SliderCards id={5} imageUrl="" name="" type="" chapter={1} />
//     //     <SliderCards id={6} imageUrl="" name="" type="" chapter={1} />
//     //     <SliderCards id={7} imageUrl="" name="" type="" chapter={1} />
//     //     <SliderCards id={8} imageUrl="" name="" type="" chapter={1} />
//     //      */}

//     //     {/* <MangaItems /> */}

        
//     //   </div>
//     // </Container>

    
//       <Container>
//         {/* <div className="flex gap-4 py-3 px-4 bg-white mt-[16px] mb-[20px] rounded-lg">
//           {mangaItems.length === 0 ? (
//             <div className="flex gap-4">
//               {[...new Array(8)].map((_, index) => (
//                 <MangaCardSkeleton key={index} />
//               ))}
//             </div>
//           ) : (
//             mangaItems.map((item, index) => (
//               <SliderCards
//                 id={item.id}
//                 key={index}
//                 imageUrl={item.imageUrl}
//                 name={item.name}
//                 type={item.type}
//                 chapter={item.id}
//               />
//             ))
//           )}
//         </div> */}
//         {
//           mangaItems.map((item, index) => (
//             <SliderCards
//               id={item.id}
//               key={index}
//               imageUrl={item.imageUrl}
//               name={item.name}
//               type={item.type}
//               chapter={item.id}
//             />
//           ))
        
//         }
//       </Container>
//     );
    
  
// };

'use client'

import React from 'react';
import { Container, MangaCardSkeleton, SliderCards } from '.';
import { Api } from '@/shared/services/api-client';
import { mangaItem } from '@/shared/services/mangaItem';
import { MangaItem } from '@prisma/client';

interface Props {
  className?: string;
}

export const Slider: React.FC<Props> = ({ className }) => {
  const [mangaItems, setMangaItems] = React.useState<MangaItem[]>([]);

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
    <Container>
      <div className="flex gap-4 py-3 px-4 bg-white mt-[16px] mb-[20px] rounded-lg overflow-hidden">
        {/* {[...new Array(8)].map((_, index) => (  
          <MangaCardSkeleton key={index} />
        ))} */}

{
          mangaItems.map((item, index) => (
            <SliderCards
              id={item.id}
              key={index}
              imageUrl={item.imageUrl}
              name={item.name}
              type={item.type}
              chapter={item.id}
            />
          ))
        
        }
      </div>
    </Container>
  );
};