"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { Container, SliderCards } from ".";
import { MangaCardSkeleton } from "./manga-card-skeleton";
import { prisma } from "@/prisma/prisma-client";
import { Chapter, MangaItem } from "@prisma/client";
// import { Api } from "@/shared/services/api-client";

interface Props {
  className?: string;
}

export const Slider: React.FC<Props> = ({ className }) => {
  const [mangaItem, setMangaItem] = React.useState<MangaItem[]>([]);
  const [chapter, setChapter] = React.useState<Chapter[]>([]);


  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await prisma.mangaItem.findMany();
  
  //     console.log(data); // Убедитесь, что данные получены
  //     setMangaItem(data); // Сохраняем данные в state
  //   };
  
  //   fetchData();
  // }, [mangaItem]);
  

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //       try {
  //       const response = await fetch("/api/mangaItem");
  //       const data = await response.json();
  //       setMangaItem(data);
  
  //       console.log(data);
  //       setMangaItem(data); // Устанавливаем всё сразу
  //     } catch (error){
  //       console.error(error)
  //     };
  //   }

  //   fetchData();
  // }, []);

 React.useEffect(() => {
  async () => {
    try {
      const mangaItemApi = await prisma.mangaItem.findMany({
          include: {
            chapter: true,
            tags: true,
            genre: true,
          }
      })
      setMangaItem(mangaItemApi)
    } catch (error) {
      console.log(error)
    }
    console.log(mangaItem)
  }
 }, [])

  return (
    // <Carousel>
    //   <CarouselContent className="-ml-2 md:-ml-4">
    //     <CarouselPrevious />
    //     <CarouselItem className="pl-2 md:pl-4">Hello</CarouselItem>
    //     <CarouselItem className="pl-2 md:pl-4">how</CarouselItem>
    //     <CarouselItem className="pl-2 md:pl-4">are you</CarouselItem>
    //     <CarouselNext />
    //   </CarouselContent>
    // </Carousel>
    <Container>
      <div className="flex gap-4 py-3 px-4 bg-white mt-[16px] mb-[20px] rounded-lg">
        {/* <div className="flex gap-4">
        {
          [...new Array(8)].map((_, index) => (
              <MangaCardSkeleton key={index} />
          ))
        }
        </div> */}
        {/* <SliderCards id={1} imageUrl="" name="" type="" chapter={1} />
        <SliderCards id={2} imageUrl="" name="" type="" chapter={1} />
        <SliderCards id={3} imageUrl="" name="" type="" chapter={1} />
        <SliderCards id={4} imageUrl="" name="" type="" chapter={1} />
        <SliderCards id={5} imageUrl="" name="" type="" chapter={1} />
        <SliderCards id={6} imageUrl="" name="" type="" chapter={1} />
        <SliderCards id={7} imageUrl="" name="" type="" chapter={1} />
        <SliderCards id={8} imageUrl="" name="" type="" chapter={1} />
         */}

        {mangaItem.map((item, index) => (
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
    </Container>
  );
};
