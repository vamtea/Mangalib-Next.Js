import React from 'react';
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

interface Props {
    className?: string;
}



export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <div className="flex items-center justify-between py-2 px-4">
          <Link href="/">
            <div className="flex items-center gap-1">
            <span className="text-[18px] font-bold">Сейчас читают</span>
            <ArrowRight color="#000000" strokeWidth={1.5} size={20} />
            </div>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-1 items-center text-[12px] border-solid border-[1px] border-[#dcdee2] rounded-[6px] px-[6px] ">
              За день <ChevronDown color="#000000" size={15}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>За день </DropdownMenuItem>
              <DropdownMenuItem>За неделю</DropdownMenuItem>
              <DropdownMenuItem>За месяц</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
  );
};