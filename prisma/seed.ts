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
  




  await prisma.mangaItem.createMany({
    data: [
      {
        id: 1,
        name: "Элисед",
        imageUrl: "https://cover.imglib.info/uploads/cover/saiki-kusuo-no-psi-nan/cover/hgljAu9sJI57_250x350.jpg",
        type: "Манга",
        description: "Description",
        status: "Онгоинг",
        ageRating: "12+",
        releasedFormat: ["Вебтун"],
        translateStatus: ["Завершен"],
        other: "fff",
        otherName: "eeee",
      },
      {
        id: 2,
        name: "Милый дом",
        imageUrl: "https://cover.imglib.info/uploads/cover/sweet-home-kim-carnby-/cover/zL2inmMagDPC_250x350.jpg",
        type: "Манхва",
        description: "Твоя задротская душаНе любит всех — только себя.Ты шлёшь семью и мир вокруг,И без друзей твой ближний круг.",
        status: "Завершен",
        ageRating: "18+",
        releasedFormat: ["Вебтун", "Веб", "В цвете"],
        translateStatus: ["Завершен"],
        other: "fff",
        otherName: "Seuwiteu Hom",
      },
      {
        id: 3,
        name: "Лукизм",
        imageUrl: "https://cover.imglib.info/uploads/cover/oemojisangjuui/cover/xNmztlF1Omn8_250x350.jpg",
        type: "Манхва",
        description: "Пак Хён Сок — непривлекательный парень с избыточным весом, подвергающийся школьной травле. Он знает всё о беспомощности, страхе и несправедливости. Но однажды, решив начать новую жизнь, он вдруг обретает и новое тело. Как же поведёт себя извечный неудачник, получив небывалые силу и красоту, и впервые столкнувшись с восхищением окружающих? Докопается ли он до секретов внезапного преображения? И построит ли по-настоящему нового себя?",
        status: "Онгоинг",
        ageRating: "16+",
        releasedFormat: ["Вебтун", "Веб", "В цвете"],
        translateStatus: ["Продолжается"],
        other: "fff",
        otherName: "Oemojisangjuui",
      },
      {
        id: 4,
        name: "Борьба в прямом эфире",
        imageUrl: "https://cover.imglib.info/uploads/cover/how-to-fight/cover/jreEug5Cqr3C_250x350.jpg",
        type: "Манхва",
        description: "Пак Хён Сок — непривлекательный парень с избыточным весом, подвергающийся школьной травле. Он знает всё о беспомощности, страхе и несправедливости. Но однажды, решив начать новую жизнь, он вдруг обретает и новое тело. Как же поведёт себя извечный неудачник, получив небывалые силу и красоту, и впервые столкнувшись с восхищением окружающих? Докопается ли он до секретов внезапного преображения? И построит ли по-настоящему нового себя?",
        status: "Онгоинг",
        ageRating: "16+",
        releasedFormat: ["Вебтун", "Веб", "В цвете"],
        translateStatus: ["Завершён"],
        other: "fff",
        otherName: "Ssaumdokak",
      },
      {
        id: 5,
        name: "Ветролом",
        imageUrl: "https://cover.imglib.info/uploads/cover/wind-breaker/cover/RWDstYRkXMxO_250x350.jpg",
        type: "Манхва",
        description: "Ветролом — драма о юных уличных гонщиках, мечтающих о свободе. Главный герой — Джа Хён — сын успешных родителей и лучший ученик в своей школе, он никогда не знал, что значит «бороться за свою мечту», ведь вся его жизнь определялась родителями, которые хотят для сына только одного — успешного окончания школы. Но однажды Джа Хён, с детства любящий велоспорт,",
        status: "Онгоинг",
        ageRating: "16+",
        releasedFormat: ["Вебтун", "Веб", "В цвете"],
        translateStatus: ["Продолжается"],
        other: "fff",
        otherName: "windeubeuleikeo",
      },
      {
        id: 6,
        name: "Моб Психо 100",
        imageUrl: "https://cover.imglib.info/uploads/cover/mob-psycho-100/cover/amQ5zHVI0buq_250x350.jpg",
        type: "Манга",
        description: "Кагэяма Сигэо, также известный как «Моб», восьмиклассник с психическими способностями. Он мог сгибать ложки и поднимать вещи силой мысли с ранних лет, но затем он постепенно начал сдерживаться от использования способностей на публике, потому что к нему относились негативно из-за этого. А теперь, единственное, чего он хочет — это подружиться с девочкой из его класса, Цубоми. Вместе со своим психическим «наставником»",
        status: "Завршён",
        ageRating: "16+",
        releasedFormat: [""],
        translateStatus: ["Завершен"],
        other: "fff",
        otherName: "Mobu Saiko Hyaku",
      },
      {
        id: 7,
        name: "Всеведущий читатель",
        imageUrl: "https://cover.imglib.info/uploads/cover/jeonjijeog-dogja-sijeom_/cover/fH64VTVQdHiu_250x350.jpg",
        type: "Манхва",
        description: "«Я знаю то, что сейчас будет». В тот момент, когда он подумал об этом, мир был уже разрушен, и вдруг открылась новая вселенная. Новая жизнь обычного читателя начинается в мире романа... романа, который смог прочесть лишь он.",
        status: "Онгоинг",
        ageRating: "16+",
        releasedFormat: ["Вебтун", "Веб", "В цвете"],
        translateStatus: ["Продолжается"],
        other: "fff",
        otherName: "Jeonjijeog dogja sijeom",
      },
      {
        id: 8,
        name: "Свинарник",
        imageUrl: "https://cover.imglib.info/uploads/cover/dwaejiuri-/cover/HoQzzL1Ov53y_250x350.jpg",
        type: "Манхва",
        description: "Расслабляющий отдых в раю или смертельная ловушка? Главный герой просыпается на захватывающем дух пляже, но понятия не имеет, кто он и как сюда попал. Как бы он ни пытался собрать всё воедино, распутать эту головокружительную тайну будет нелегко, когда каждая подсказка ведёт к ещё более безумным вопросам... и семья, которая приветствует его в своем доме, не такая, какой кажется.",
        status: "Завершён",
        ageRating: "18+",
        releasedFormat: ["Вебтун", "Веб", "В цвете"],
        translateStatus: ["Завершен"],
        other: "fff",
        otherName: "dwaejiuli",
      },
      {
        id: 9,
        name: "Истинное Образование",
        imageUrl: "https://cover.imglib.info/uploads/cover/true-education/cover/wcoCYLHNa9aw_250x350.jpg",
        type: "Манхва",
        description: "На Хва Джин, член бюро по образованию, со всей серьезностью борется со студентами, дабы восстановить разрушенный авторитет преподавателей!",
        status: "Онгоинг",
        ageRating: "16+",
        releasedFormat: ["Вебтун", "Веб", "В цвете"],
        translateStatus: ["Продолжается"],
        other: "fff",
        otherName: "chamgyoyug",
      },
      {
        id: 10,
        name: "Менеджер Ким",
        imageUrl: "https://cover.imglib.info/uploads/cover/gimbujng/cover/0blx5B6EQ91g_250x350.jpg",
        type: "Манхва",
        description: '"Пожалуйста, не трогайте мужчину в очках...” Менеджер Ким, глава семьи, который бросил работу специального агента и выбрал обычную жизнь ради своей дочери Мин Джи. Затем в один прекрасный день Мин Джи исчезает, не сказав ни слова, и менеджер Ким начинает искать свою дочь, превращая страну, которая следит за ним, во врага...',
        status: "Онгоинг",
        ageRating: "16+",
        releasedFormat: ["Вебтун", "Веб", "В цвете"],
        translateStatus: ["Продолжается"],
        other: "fff",
        otherName: "gimbujng",
      },
      {
        id: 11,
        name: "Ванпанчмен",
        imageUrl: "https://cover.imglib.info/uploads/cover/onepunchman/cover/21RI4XqiRyhS_250x350.jpg",
        type: "Манга",
        description: 'Манга повествует о молодом человеке по имени Сайтама. Он — герой, обычный герой. Основная его проблема в том, что он вышибает дух из злодеев одним ударом. А это — очень скучно…',
        status: "Онгоинг",
        ageRating: "16+",
        releasedFormat: [ "Веб"],
        translateStatus: ["Продолжается"],
        other: "fff",
        otherName: "Onepunch-Man",
      },
    ]
  });

  const createdMangaItems = await prisma.mangaItem.findMany({
    where: {
      id: { in: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    }
  });
  
  try {
    // Создание глав (если страница определяется)
    await prisma.chapter.createMany({
      data: createdMangaItems.map((item, index) => ({
        mangaItemId: item.id,
        title: `Chapter ${index + 1}`,  // Вы можете изменить название главы
        page: [String(page), String(page1)]  // Здесь проверьте, что page и page1 определены
      }))
    });
  
    // Обновление тегов и жанров для каждого mangaItem
    for (const [index, item] of createdMangaItems.entries()) {
      try {
        await prisma.mangaItem.update({
          where: { id: item.id },
          data: {
            tags: {
              connect: tags.slice(index, index + 3).map(tag => ({ id: tag.id })),  // Если тегов меньше, чем указано
            },
            genre: {
              connect: genre.slice(index, index + 5).map(g => ({ id: g.id })),  // Проверьте, что жанры существуют
            },
          },
        });
      } catch (error) {
        console.error(`Error updating mangaItem with id ${item.id}:`, error);
      }
    }
  } catch (error) {
    console.error('Error during manga and chapter creation:', error);
  }

  console.log('Создаваемые манга-элементы:', createdMangaItems);

  

  // const createdMangaItems = await prisma.mangaItem.findMany({
  //   where: {
  //     id: { in: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], },
  //   }
  // })

  // await prisma.chapter.createMany({
  //   data: createdMangaItems.map((item) => ({
  //     mangaItemId: item.id,
  //     title: "Chapter 1",
  //     page: [String(page), String(page1)]
  //   }))
  // })


  // for (const [index, item] of createdMangaItems.entries()) {
  //   await prisma.mangaItem.update({
  //     where: { id: item.id },
  //     data: {
  //       tags: {
  //         connect: tags.slice(index, index + 3).map(tag => ({ id: tag.id })), // Пример для подключения уникальных тегов
  //       },
  //       genre: {
  //         connect: genre.slice(index, index + 5).map(g => ({ id: g.id })), // Пример для подключения уникальных жанров
  //       },
  //     },
  //   });
  // }
  
  


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
