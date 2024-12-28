import React from "react";
import { TitleLeftSide } from "./title-left-side";
import { TitleInput } from "./title-input";
import { TitleRightSide } from "./title-right-side";

interface Props {
  className?: string;
}

export const Titles: React.FC<Props> = ({ className }) => {
  return (
    <div className="relative">
      <div className="grid grid-rows-custom grid-cols-custom mt-4 gap-4">
      <TitleLeftSide  />
      <div className="flex flex-col h-[900px]">
        <TitleInput />
        <TitleRightSide />
      </div>
    </div>
    </div>
  );
};
