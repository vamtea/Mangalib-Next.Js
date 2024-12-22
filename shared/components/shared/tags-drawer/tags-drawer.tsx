
import React from "react";
import { TagsDrawerFooter, TagsDrawerHeader, TagsDrawerList } from ".";


interface Props {
  className?: string;
}

export const TagsDrawer: React.FC<Props> = ({ className })  => {
  
 

  return (
    <div className=" w-full rounded-[8px] max-h-[calc(100vh-88px)] bg-white z-50 relative flex flex-col overflow-hidden">
      <TagsDrawerHeader className="sticky rounded-t-[8px] z-20 top-0 bg-white" />
      <TagsDrawerList className="overflow-y-auto flex-grow rounded-b-[8px] " />
      <TagsDrawerFooter className="rounded-b-[8px] flex-shrink-0 z-10 hover:overflow-y-auto" />

    </div>
  );
}
