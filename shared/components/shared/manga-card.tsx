import {
  ArrowRight,
  Bookmark,
  BookOpen,
  ChevronDown,
  Plus,
  SquarePen,
  Star,
  TriangleAlert,
} from "lucide-react";
import React from "react";
import { SimilarCard, TagsCard, TranslateCard } from ".";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  id?: number;
}

type AboutCardProps = {
  id: number;
  imageUrl: string;
  type?: string;
  releasedFormat: string[];
  chapter: {
    id: number;
    title: string;
    page: string[];
    mangaItemId: number;
  }[];
  status: string;
  translateStatus: string[];
  author: string;
  paintAuthor: string;
  otherName?: string | null;
  name: string;
  description: string;
};

export const MangaCard: React.FC<AboutCardProps> = ({
  imageUrl,
  type,
  releasedFormat,
  chapter,
  status,
  translateStatus,
  author,
  paintAuthor,
  otherName,
  name,
  description,
  id
}) => {
  const aboutCard: Props[] = [
    {
      name: "О тайтле",
      id: 1,
    },
    {
      name: "Главы",
      id: 2,
    },
    {
      name: "Комментарии",
      id: 3,
    },
    {
      name: "Отзывы",
      id: 4,
    },
  ];

  return (
    <Link href={`/mangaItem/${id}`}>
      <div className="mt-[15px] flex gap-[30px]">
        {/* left side */}
        <div className="w-[260px] flex flex-col gap-[15px]">
          <div className="relative w-[260px] h-[364px] ">
            <div className=" w-[260px] h-[364px] rounded-[6px] ">
              <Image
                className="object-cover w-full h-full rounded-[6px]"
                src={imageUrl}
                fill
                alt=""
              />
            </div>
            <div className="bg-gradientManga absolute bottom-0 w-full pb-[6px] pt-[70px] rounded-b-[6px]">
              <div className="flex justify-around   ">
                <TriangleAlert
                  color="#ffffff"
                  size={16}
                  className="cursor-pointer"
                />
                <SquarePen
                  color="#ffffff"
                  size={16}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="cursor-pointer flex justify-between bg-[#ff9100] items-center px-[10px] rounded-[6px] h-[32px]">
            <div className="flex py-[10px] text-[14px] text-white gap-1 ">
              <BookOpen className="w-[17px]" />
              Начать читать
            </div>
            <p className="opacity-[.7px] text-white text-[10px]">0/131</p>
          </div>

          <div className="flex justify-between bg-white rounded-[6px]">
            <div className="cursor-pointer text-[#ff9100] flex items-center rounded-l-[6px] border-[1px] border-r-[.5px] border-[#dcdee2] w-full text-[14px] font-normal px-[10px] gap-[4px]">
              <Bookmark className="w-[17px]" color="#ff9100" />
              Читаю
            </div>
            <div className="cursor-pointer border-[1px] border-[#dcdee2] border-l-[.5px] rounded-r-[6px] h-[32px] w-[32px] items-center justify-center flex">
              <ChevronDown className="w-[17px]" />
            </div>
          </div>

          <div className="bg-white p-2 rounded-[8px]">
            <ul className="flex flex-col">
              <li className="transition-colors duration-200 ease-in-out px-[10px] py-[6px] rounded-[6px] hover:bg-[#7474800c] cursor-pointer">
                <p className="text-[#8a8a8e] text-[13px]">Тип</p>
                <span className="text-[14px]">{type}</span>
              </li>
              <li className="transition-colors duration-200 ease-in-out px-[10px] py-[6px] rounded-[6px] hover:bg-[#7474800c] cursor-pointer">
                <p className="text-[#8a8a8e] text-[13px]">Формат</p>
                <span className="text-[14px]">{releasedFormat}</span>
              </li>
              <li className="transition-colors duration-200 ease-in-out px-[10px] py-[6px] rounded-[6px] hover:bg-[#7474800c] cursor-pointer">
                <p className="text-[#8a8a8e] text-[13px]">Выпуск</p>
                <span className="text-[14px]">2021 г.</span>
              </li>
              <li className="transition-colors duration-200 ease-in-out px-[10px] py-[6px] rounded-[6px] hover:bg-[#7474800c] cursor-pointer">
                <p className="text-[#8a8a8e] text-[13px]">Глав</p>
                <span className="text-[14px]">{chapter.length}</span>
              </li>
              <li className="transition-colors duration-200 ease-in-out px-[10px] py-[6px] rounded-[6px] hover:bg-[#7474800c] cursor-pointer">
                <p className="text-[#8a8a8e] text-[13px]">Статус</p>
                <span className="text-[14px]">{status}</span>
              </li>
              <li className="transition-colors duration-200 ease-in-out px-[10px] py-[6px] rounded-[6px] hover:bg-[#7474800c] cursor-pointer">
                <p className="text-[#8a8a8e] text-[13px]">Перевод</p>
                <span className="text-[14px]">{translateStatus}</span>
              </li>
              <li className="transition-colors duration-200 ease-in-out px-[10px] py-[6px] rounded-[6px] hover:bg-[#7474800c] cursor-pointer">
                <p className="text-[#8a8a8e] text-[13px]">Автор</p>
                <span className="text-[14px]">{author}</span>
              </li>
              <li className="transition-colors duration-200 ease-in-out px-[10px] py-[6px] rounded-[6px] hover:bg-[#7474800c] cursor-pointer">
                <p className="text-[#8a8a8e] text-[13px]">Художник</p>
                <span className="text-[14px]">{paintAuthor}</span>
              </li>
              <li className="transition-colors duration-200 ease-in-out px-[10px] py-[6px] rounded-[6px] hover:bg-[#7474800c] cursor-pointer">
                <p className="text-[#8a8a8e] text-[13px]">Издатели</p>
                <span className="text-[14px]">Never Webtoon</span>
              </li>
              <li className="transition-colors duration-200 ease-in-out px-[10px] py-[6px] rounded-[6px] hover:bg-[#7474800c] cursor-pointer">
                <p className="text-[#8a8a8e] text-[13px]">
                  Альтернативные названия
                </p>
                <span className="text-[14px]">{otherName}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* right side */}

        <div className="mt-[15px] flex-1">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1 className="text-[24px] font-semibold">{name}</h1>
              <h2 className="text-[#212529] text-[18px] font-normal">
                {otherName}
              </h2>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex gap-[5px]  text-[#212529] text-[22px] font-semibold items-center">
                <div className="items-center flex gap-[5px]">
                  <Star className="w-[18px] h-[18px] items-center" />
                  9.64
                </div>
                <p className="ml-[5px] text-[#2125298a] text-[16px] opacity-[1px]">
                  {" "}
                  8.4 k
                </p>
              </div>
              <div className="bg-white flex border-[1px] rounded-[6px] px-[10px] h-[24px] items-center gap-2 cursor-pointer">
                <Star className="w-[13px]" />
                <span className="text-[13px] font-normal">Оценить</span>
              </div>
            </div>
          </div>

          <div className="mt-[15px] bg-white rounded-[8px] w-full flex-grow">
            <div>
              <ul className="flex gap-4 px-[18px]">
                {aboutCard.map((item) => (
                  <li
                    className="cursor-pointer py-[12px]"
                    key={item.id}
                    id={String(item.id)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-b-[1px] border-[#e6e6e6] w-full " />
            <div className="px-[18px] py-4 gap-3 flex flex-col">
              <p>{description}</p>
              <div className="flex gap-2">
                <div>
                  <TagsCard name="Безумие" />
                </div>
              </div>
            </div>

            <div className="px-[18px] pt-3 pb-[6px]">
              <div className="flex flex-col gap-[14px]">
                <span className="text-[16px] font-semibold">Переводчики</span>
                <div className="flex gap-2">
                  <TranslateCard name="Bikini Bottom" />
                  <TranslateCard name="Bikin" />
                  <TranslateCard name="Art webtoon" />
                </div>
              </div>
            </div>

            {/* <div>
          <span>Связанное</span>
        </div> */}

            <div className="px-[18px] mb-[10px] py-[12px]">
              <div className="flex justify-between items-center">
                <div className="inline-block">
                  <div className="gap-[10px] font-semibold text-[16px] flex items-center cursor-pointer hover:text-[#ff6d00] mb-[10px]">
                    Похожее <ArrowRight size={14} />
                  </div>
                </div>
                <div className="hover:text-[#ff9100] w-[26px] h-[26px] hover:bg-[#ff910038] rounded-[3px] bg-[#8a8a8e2f] flex items-center justify-center">
                  <Plus
                    className="hover:text-[#ff9100] text-[#8a8a8e] cursor-pointer"
                    size={15}
                  />
                </div>
              </div>
              <div className="flex py-[6px] gap-4">
                <SimilarCard
                  title="Сайки кусущ"
                  status="Онгоинг"
                  similarType="Схожее по сюжету"
                  type="Манхва"
                />
                <SimilarCard
                  title="Сайки кусущ"
                  status="Онгоинг"
                  similarType="Схожее по сюжету"
                  type="Манхва"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
