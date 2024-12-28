import { data } from "@remix-run/router/dist/utils";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import React from "react";

interface TitleMangaProps {
  name: string;
  chapter: number;
  data: number;
  imageUrl: string;
}

export const TitleMangaCard: React.FC<TitleMangaProps> = ({ name, chapter, data, imageUrl }) => {
  return (
    <div className="">
      <div>
        <div>
          <Image src={imageUrl} fill alt="image" />
        </div>
        <div className="flex flex-col">
          <span>{name}</span>
          <p>Продолжить {chapter}</p>
        </div>
      </div>

      <div>
        <span>Добавлено</span>
        <span>{data}</span>
      </div>
      <button>
        <Ellipsis />
      </button>
    </div>
  );
};
