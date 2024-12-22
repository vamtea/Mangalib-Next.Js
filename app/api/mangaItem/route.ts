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
// const express = require("express");
// const app = express();

// app.get("/api/mangaItem", async (req: NextRequest, res: NextResponse) => {
//   try {
//     const data = await prisma.mangaItem.findMany({
//       include: {
//         tags: true,
//         genre: true,
//         chapter: true,
//       },
//     });
//     return NextResponse.json(data, {status: 200})

//   } catch (error) {
//     console.log(error, 'api');
//   }
// });

export async function GET() {
    const mangaItem = await prisma.mangaItem.findMany({
        include : {
            tags: true,
            genre: true,
            chapter: true,
        }
    });

    return NextResponse.json(mangaItem)
}
