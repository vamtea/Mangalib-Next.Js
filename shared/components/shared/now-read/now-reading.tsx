'use client'

import React from "react";

import { Container } from "../container";
import { Header } from "./header";
import { Cards } from "./cards";
import { NewColumn } from "./new-column";
import { NewPopularColumn } from "./new-popular-column";
import { PopularColumn } from "./popular-column";
import { NowReadSkeleton } from ".";

interface Props {
  className?: string;
}

export const NowReading: React.FC<Props> = ({ className }) => {
  return (
    <Container className="bg-white rounded-lg py-[6px] mb-5">
      <Header />
      <div className="flex justify-between">
        <div className="grid grid-cols-[auto_auto_auto] w-full gap-4 py-2 items-center justify-between px-[18px]">
        {
          [...new Array(9)].map((_, index) => (
            <NowReadSkeleton  
            key={index} />
          ))
        }
        </div>
        {/* <NewColumn />
        <NewPopularColumn />
        <PopularColumn /> */}
      </div>
    </Container>
  );
};
