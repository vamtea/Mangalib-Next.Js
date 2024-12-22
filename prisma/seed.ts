import { genre, tags } from "@/prisma/constants";
import { PrismaClient } from "@prisma/client";
const page = "https://img33.imgslib.link//manga/sweet-home-kim-carnby-/chapters/118675/Sweet_Home_ch00_01.png"
const page1 = "https://img33.imgslib.link//manga/sweet-home-kim-carnby-/chapters/118675/Sweet_Home_ch00_01.png"

const prisma = new PrismaClient();

async function up() {


  await prisma.tags.createMany({
    data: tags
  })
  await prisma.genre.createMany({
    data: genre
  })
  




  await prisma.mangaItem.create({
    data:  {
      name: "Элисед",
      imageUrl: "https://cover.imglib.info/uploads/cover/saiki-kusuo-no-psi-nan/cover/hgljAu9sJI57_250x350.jpg",
      type: "Манга",
      description: "Description",
      status: "Онгоинг",
      ageRating: "12+",
      tags:  {
        connect: tags.slice(0, 3),
      },
      genre: {
        connect: genre.slice(0, 5),
      },
      releasedFormat: ["Вебтун"], // This is now a string
      translateStatus: ["Завершен"],
      other: "fff",
      otherName: "eeee",
      chapter: {
        create: [
          { title: "Chapter 1", page: [String(page), String(page1)] 
            
          }],
      }
    },
  })
  



  // const manga1 = await prisma.item.create({
  //   data: {
  //     name: "Элисед",
  //     imageUrl: String(cover1),
  //     type: "Манга",
  //     description: "Description",
  //     status: "Онгоинг",
  //     ageRating: "12+",
  //     tags: {
  //       connect: tags.slice(0, 3),
  //     },
  //     genre: {
  //       connect: genre.slice(0, 5),
  //     },
  //     releasedFormat: "Вебтун",
  //     translateStatus: ["Завершен"],
  //     chapter: {
  //       create: [{ title: "Chapter 1", page: [String(page), String(page1)] }],
  //     },
  //   },
  // });
  // const manga1 = await prisma.item.create({
  //   data: {
  //       name: "Лукизм",
  //       imageUrl: "https://cover.imglib.info/uploads/cover/oemojisangjuui/cover/xNmztlF1Omn8_250x350.jpg",
  //       type: "Манхва",
  //       description: "Пак Хён Сок...",
  //       status: "Онгоинг",
  //       ageRating: "16+",
  //       tags: tags.map((tag) => tag.name).slice(0, 3),
  //       genre: genre.map((g) => g.name).slice(0, 3),
  //       releasedFormat: releasedFormat.map((r) => r.name).join(", "), // Преобразование массива в строку
  //       translateStatus: "Завершен",
  //       chapter: "523",
  //   },
// });
}


async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "MangaItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Genre" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Tags" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
