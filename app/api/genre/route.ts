import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     if (req.method !== "GET") {
//       return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//     }
    
//     const genres = await prisma.genre.findMany({
//       select: {
//         id: true,
//         name: true,
//       }
//     });

//     console.log(genres)
//     res.status(200).json(genres);
//   } catch (error) {
//     console.error('Error fetching genres:', error);
//     res.status(500).json({ error: 'Failed to fetch genres' });
//   }
// }

export async function GET() {
  const genre = await prisma.genre.findMany()
  return (
    NextResponse.json(genre)
  )
}
