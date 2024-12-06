import React from "react";
import { NewSectionCard } from "./new-section-card";
import { ArrowRight } from "lucide-react";

interface Props {
  className?: string;
}

export const NewSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-2 pl-4 mt-5 mb-2 ">
        <span className="text-[15px] font-bold">Новинки</span>
        <ArrowRight color="#000000" size={17} />
      </div>
      <div className=" px-4 py-[12px] bg-white flex gap-4 rounded-[20px]">
        <NewSectionCard />
        <NewSectionCard />
        <NewSectionCard />
        <NewSectionCard />
      </div>
    </div>
  );
};
