import { prisma } from "@/prisma/prisma-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const manga = await prisma.mangaItem.findUnique({
      where: { id: Number(id) },
      include: {
        genre: true,
        tags: true,
        chapter: true,
      },
    });

    if (!manga) {
      return res.status(404).json({ error: "Manga not found" });
    }

    res.status(200).json(manga);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch manga" });
  }
}
