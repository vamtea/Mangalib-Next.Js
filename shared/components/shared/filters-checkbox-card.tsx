import React from "react";
import { Checkbox } from "../ui";

interface Props {
  className?: string;
  title: string;
  text: string;
  name?: string;
  value: number;
}

export const FiltersCheckboxCard: React.FC<Props> = ({ className, title, text, name, value }) => {
  return (
    <div className={className}>
        <div className="flex gap-[10px] items-center">
          <Checkbox id={`checkbox-${String(name)}-${String(value)}`} />
          <label htmlFor={`checkbox-${String(name)}-${String(value)}`}>
            <span className="text-[14px] font-normal text-[#212529]">{text}</span>
          </label>
        </div>
      
    </div>
  );
};
