"use client";

import React from "react";
import { LastUpdatesCard } from "./last-updates-card";
import { Container, LastUpdateCardSkeleton } from ".";
import { cn } from "@/shared/lib/utils";
import { prisma } from "@/prisma/prisma-client";
import { MangaItem, Chapter } from "@prisma/client";
import { mangaItem } from "@/shared/services/mangaItem";
import { chapter } from "@/shared/services/chapter";

interface Props {
  className?: string;
}

type LastUpdatesProps = {
  onClick: () => void;
  className?: string;
};
export const LastUpdates: React.FC<LastUpdatesProps> = ({ className }) => {
  const [active, setActive] = React.useState(true);
  const [mangaItems, setMangaItems] = React.useState<MangaItem[]>([]);
  const [chapters, setChapters] = React.useState<Chapter[]>([]);

  React.useEffect(() => {
    const fetchManga = async () => {
      try {
        const items = await mangaItem();
        setMangaItems(items);
        console.log(items);
      } catch (error) {
        console.error("Error fetching manga items:", error);
      }
    };
    const fetchChapter = async () => {
      try {
        const items = await chapter();
        setChapters(items);
        console.log(chapters);
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

  return (
    <div className="bg-white w-[610px] py-4 px-4 rounded-md">
      <div className="flex justify-between pb-2">
        <span className="text-[#212529] text-[15px] font-bold">
          Последние обновления
        </span>
        <div className="flex gap-4 ">
          <span
            onClick={() => setActive(true)}
            className={cn(
              "text-[#212529] cursor-pointer",
              {
                " transition-all duration-800 ease-in-out relative after:absolute  after:-bottom-[8px] after:border-b-[3px] after:-left-[0px]   after:w-full after:h-[3px] after:border-b-[#ffab40] after:rounded-t-[3px]":
                  active === true,
              },
              className
            )}
          >
            Все обновления
          </span>

          <span
            onClick={() => setActive(false)}
            className={cn(
              "text-[#212529] cursor-pointer",
              {
                "relative after:absolute  after:-bottom-[8px] after:border-b-[3px] after:-left-[0px]   after:w-full after:h-[3px] after:border-b-[#ffab40] after:rounded-t-[3px]":
                  active === false,
              },
              className
            )}
          >
            Мои обновления
          </span>
        </div>
      </div>
      <div className="border-b-[0.1px] " />
      <div className="inline-block h-[auto]">
        <div className="flex gap-2 flex-col py-4">
          {/* {[...new Array(9)].map((_, index) => (
            <div key={index}>
              <LastUpdateCardSkeleton />
              <div className="bg-[#d1d1d1] w-full h-[1px] my-2" />
            </div>
          ))} */}
          {manga.map((item) => (
            <LastUpdatesCard
            id={item.id}
              key={item.id}
              image={item.imageUrl}
              name={item.name}
              chapter={item.chapters.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
