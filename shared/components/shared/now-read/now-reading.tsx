import React from "react";

import { Container } from "../container";
import { Header } from "./header";
import { Cards } from "./cards";
import { NewColumn } from "./new-column";
import { NewPopularColumn } from "./new-popular-column";
import { PopularColumn } from "./popular-column";

interface Props {
  className?: string;
}

export const NowReading: React.FC<Props> = ({ className }) => {
  return (
    <Container className="bg-white rounded-lg py-[6px] mb-5">
      <Header />
      <div className="flex justify-between">
        <NewColumn />
        <NewPopularColumn />
        <PopularColumn />
      </div>
    </Container>
  );
};
