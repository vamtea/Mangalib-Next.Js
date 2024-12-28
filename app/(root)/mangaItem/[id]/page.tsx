import { prisma } from "@/prisma/prisma-client";
import { Container, Header, MangaCard } from "@/shared/components/shared";
import { mangaItem } from "@/shared/services/mangaItem";
import { useRouter } from "next/router";
import React from "react";

// Типизация для объекта manga
interface MangaData {
  chapter: any[]; // Замените на правильный тип
  releasedFormat: string[];
  name: string;
  imageUrl: string;
  type: string;
  description: string;
  status: string;
  ageRating: string;
  translateStatus: string[];
  other?: string | null;
  otherName?: string | null;
  id: number;
}

// Компонент Manga
export default async function Manga({
  params: { id },
}: {
  params: { id: string };
}) {
  const manga: MangaData | null = await prisma.mangaItem.findFirst({
    where: { id: Number(id) },
    select: {
      chapter: true,
      releasedFormat: true,
      name: true,
      imageUrl: true,
      type: true,
      description: true,
      status: true,
      ageRating: true,
      translateStatus: true,
      other: true,
      otherName: true,
      id: true,
    },
  });

  if (!manga) {
    return <div>Manga not found</div>; // Обработка случая, если манга не найдена
  }

  return (
     <>
      <Header />
    <Container>
      {/* Передаем данные, включая авторов, если это необходимо */}
      <MangaCard 
        {...manga} 
        author="ldldld" 
        paintAuthor="kdkdkd" 
      />
    </Container></>
  );
}
