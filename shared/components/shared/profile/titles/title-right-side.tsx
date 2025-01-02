'use client'


import React from "react";
import { TitleMangaCard } from "./title-manga-card";
import { Chapter, MangaItem } from "@prisma/client";
import { mangaItem } from "@/shared/services/mangaItem";
import { chapter } from "@/shared/services/chapter";

interface Props {
  className?: string;
}

export const TitleRightSide: React.FC<Props> = ({ className }) => {
  const [mangaItems, setMangaItems] = React.useState<MangaItem[]>([]);
  const [chapters, setChapters] = React.useState<Chapter[]>([]);

  React.useEffect(() => {
    const fetchManga = async () => {
      try {
        const items = await mangaItem();
        setMangaItems(items);
      } catch (error) {
        console.error("Error fetching manga items:", error);
      }
    };
    const fetchChapter = async () => {
      try {
        const items = await chapter();
        setChapters(items);
      } catch (error) {
        console.error("Error fetching chapter items:", error);
      }
    };

    fetchChapter();
    fetchManga();
  }, []);

  const manga = mangaItems.map((manga) => ({
    ...manga,
    chapters: chapters.filter((ch) => ch.mangaItemId === manga.id),
  }));
  
  
  
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Запросы манги и глав
  //       const [mangaResponse, chapterResponse] = await Promise.all([
  //         mangaItem(),
  //         chapter(),
  //       ]);
  //       setMangaItems(mangaResponse);
  //       setChapters(chapterResponse);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Объединение манги с главами
  // const mangaWithChapters = mangaItems.map((manga) => ({
  //   ...manga,
  //   chapters: chapters.filter((ch) => ch.mangaItemId === manga.id),
  // }));
  return (
    <div className="py-[4px] bg-white rounded-[8px] overflow-hidden">
      {manga.map((item) => (
        <TitleMangaCard
          id={item.id}
          key={item.id}
          imageUrl={item.imageUrl}
          name={item.name}
          chapter={item.chapters.length}
          data={new Date(item.updatedAt).getTime()}
        />
      ))}
    </div>
  );
};
