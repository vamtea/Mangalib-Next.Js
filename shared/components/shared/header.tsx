"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/shared/img/logo.jpg";
import { Avatar, Container, SearchDrawer } from ".";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import {
  Bell,
  ChevronDown,
  ChevronRight,
  Compass,
  Ellipsis,
  FileQuestion,
  FileUser,
  Flame,
  Landmark,
  Layers,
  Menu,
  MessageCircle,
  Newspaper,
  Plus,
  ScrollText,
  Search,
  Star,
  User,
  Users,
  UserSearch,
  CircleUser,
} from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/components/ui/drawer";
import { Button } from "../ui/button";
import { cn } from "@/shared/lib/utils";
import { type } from "@/prisma/constants";

interface Props {
  className?: string;
}

type CatalogItemProps = {
  icon: any;
  name: string;
  id: number;
};

export const Header: React.FC<Props> = ({ className }) => {
  const [catalogPopup, setCatalogPopup] = React.useState(false);
  const [searchPopup, setSearchPopup] = React.useState(false);

  const toggleSearchPopup = () => setSearchPopup(!searchPopup);

  const toggleCatalogPopup = () => {
    setCatalogPopup(!catalogPopup);
  };

  const catalogItem: CatalogItemProps[] = [
    { icon: <Flame size={18} />, name: "Сейчас читают", id: 1 },
    { icon: <Star size={18} />, name: "Коллекции", id: 2 },
    { icon: <Compass size={18} />, name: "Отзывы и Рецензии", id: 3 },
    { icon: <Users size={18} />, name: "Команды", id: 4 },
    { icon: <User size={18} />, name: "Люди", id: 5 },
    { icon: <ScrollText size={18} />, name: "Франшизы ", id: 6 },
    { icon: <Landmark size={18} />, name: "Персонажи", id: 7 },
    { icon: <FileUser size={18} />, name: "Издательства", id: 8 },
    { icon: <UserSearch size={18} />, name: "Пользователи", id: 9 },
  ];

  return (
    <header className={cn("bg-[#fff3e0] sticky top-0 z-50", className)}>
      <Container className="flex flex-row items-center">
        {/* left side */}
        <Link href="/">
          <div>
            <Image src={logo} alt="logo" width={164} height={100} />
          </div>
        </Link>

        {/* middle */}

        <div className="flex flex-1 items-center justify-center gap-2 py-4">
          <div className="relative">
            <div
              onClick={toggleCatalogPopup}
              className=" flex items-center gap-1 hover:bg-[#ffac4036] cursor-pointer px-3 py-1 rounded-[6px] transition-colors duration-200 ease-in-out"
            >
              <Layers color="#000000" size={15} />
              <span>Каталог</span>
              <ChevronDown color="#000000" size={15} />
            </div>

            {catalogPopup && (
              <div className="absolute top-[50px] shasow-catalogDropShadow duration-200 ease-in-out">
                <div className="flex bg-white p-[6px] rounded-[8px]">
                  <ul className="flex flex-col text-[14px] text-nowrap w-[200px]">
                    <li className="hover:bg-[#7474800c] rounded-[8px]">
                      <Link
                        href="/catalog"
                        className="flex justify-between px-[14px] py-[8px]"
                      >
                        Тайтлы
                        <ChevronRight size={18} />
                      </Link>
                    </li>

                    {catalogItem.map((item) => (
                      <li
                        key={item.id}
                        className="flex w-full gap-[10px] px-[14px] py-[8px] cursor-pointer hover:bg-[#7474800c] rounded-[8px] transition-colors duration-200 ease-in-out"
                      >
                        {item.icon}
                        <span className="">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-[1px] border-[#e5e5e5] border-[1px]" />
                  <ul className="bg-white rounded-r-[8px] text-[14px] text-nowrap p-[6px] w-[200px]">
                    {type.map((item) => (
                      <li
                        className="flex w-full gap-[10px] px-[14px] py-[8px] cursor-pointer hover:bg-[#7474800c] rounded-[8px] transition-colors duration-200 ease-in-out"
                        key={item.id}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              onClick={toggleSearchPopup}
              className="flex items-center gap-1 hover:bg-[#ffac4036] cursor-pointer px-3 py-1 rounded-[6px] transition-colors duration-200 ease-in-out"
            >
              <Search color="#000000" size={16} /> Поиск
            </div>
            {searchPopup && <SearchDrawer />}
          </div>
          <Link href="https://lib.social/forum">
            <div className="flex items-center gap-1 hover:bg-[#ffac4036] cursor-pointer px-3 py-1 rounded-[6px] transition-colors duration-200 ease-in-out">
              <MessageCircle color="#000000" size={15} />
              Форум
            </div>
          </Link>
          <div>
            <div className="flex items-center hover:bg-[#ffac4036] cursor-pointer justify-center h-8 w-8 py-1 rounded-[6px] transition-colors duration-200 ease-in-out">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis color="#000000" size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    {" "}
                    <Newspaper color="#000000" size={16} /> Новости
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {" "}
                    <FileQuestion color="#000000" size={16} /> Вопросы и ответы
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        {/* right side */}

        <div className="flex items-center gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Plus color="#000000" strokeWidth={2} size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Newspaper color="#000000" size={16} /> Новости
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileQuestion color="#000000" size={16} /> Вопросы и ответы
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-3">
            <div className="cursor-pointer">
              <Bell color="#000000" strokeWidth={1.75} size={17} />
            </div>
            <Link href="/profile">
              <Avatar />
            </Link>
            <Menu color="#000000" strokeWidth={2} size={19} />
          </div>
        </div>
      </Container>
    </header>
  );
};
