// import { prisma } from "@/prisma/prisma-client";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//     const query = req.nextUrl.searchParams.get('query') || ''

//     const mangaItem = await prisma.mangaItem.findMany({
//         where: {
//             name: {
//                 contains: query,
//                 mode: "insensitive"
//             }
//         }
//     });

//     return NextResponse.json(mangaItem)
// }

import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const mangaItem = await prisma.mangaItem.findMany({
       
        select: {
            id: true,
            name: true,
            imageUrl: true,
            tags: true,
            genre: true,
            type: true,
        }
    });

    const chapter = await prisma.chapter.findMany({
        select: {
            id: true,
            title: true,
            mangaItemId: true,
            page: true,
        }
    })

    const mangaItems = mangaItem.map((manga) => ({
        ...manga,
        chapter: chapter.filter((chapter) => chapter.mangaItemId === manga.id),
      }));
    return NextResponse.json(mangaItems)
}

