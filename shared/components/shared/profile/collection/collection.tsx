import React from "react";
import { CollectionLeftSide } from "./collection-left-side";
import { CollectionInput } from "./collection-input";
import { CollectionRightSide } from "./collection-right-side";

interface Props {
  className?: string;
}

export const Collection: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="relative">
        <div className="grid grid-rows-custom grid-cols-custom mt-4 gap-4">
          <CollectionLeftSide />
          <div className="flex flex-col gap-4 h-[900px]">
            <CollectionInput />
            <CollectionRightSide />
            {/* <div className="w-full h-[100px] mt-4 bg-white rounded-[6px] items-center flex justify-center p-3 text-[#8a8a8e] text-[14px]">
              Ничего не найдено
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
