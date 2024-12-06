import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/shared/img/logo.jpg";
import { Avatar, Container } from ".";

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
  Ellipsis,
  FileQuestion,
  Layers,
  Menu,
  MessageCircle,
  Newspaper,
  Plus,
  Search,
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

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("bg-[#fff3e0] sticky top-0 z-10", className)}>
      <Container className="flex flex-row items-center">
        {/* left side */}
        <Link href="/">
          <div>
            <Image src={logo} alt="logo" width={164} height={100} />
          </div>
        </Link>

        {/* middle */}

        <div className="flex flex-1 items-center justify-center gap-6 py-4">
          <div className="flex items-center gap-1 ">
            <Layers color="#000000" size={15} />
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>Каталог</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ChevronDown color="#000000" size={15} />
          </div>
          <Drawer>
            <DrawerTrigger className="flex items-center gap-1">
              {" "}
              <Search color="#000000" size={16} /> Открыть
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Link href="/">
            <div className="flex items-center gap-1">
              <MessageCircle color="#000000" size={15} />
              Форум
            </div>
          </Link>
          <div>
            <div className="flex items-center">
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
            <Avatar />
            <Menu color="#000000" strokeWidth={2} size={19} />
          </div>
        </div>
      </Container>
    </header>
  );
};
