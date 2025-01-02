import React from "react";
import { CommentsLeftSide } from "./comments-left-side";
import { CommentsInput } from "./comments-input";
import { CommentsRightSide } from "./comments-right-side";

interface Props {
  className?: string;
}

export const Comments: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="relative">
        <div className="grid grid-rows-custom grid-cols-custom mt-4 gap-4">
          <CommentsLeftSide />
          <div className="flex flex-col gap-4 h-[900px]">
            <CommentsInput />
            <CommentsRightSide />
            
          </div>
        </div>
      </div>
    </div>
  );
};
