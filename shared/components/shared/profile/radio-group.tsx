"use client";

import React from "react";
import { RadioGroup } from "@/shared/components/ui";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@/shared/components/ui/label";

type RadioGrouptProps = {
  id: number;
  name: string;
  radioName: string;
};

export const ProfileRadioGroup: React.FC<RadioGrouptProps> = ({ id, name, radioName }) => {
  return (
    <div>
      {/* <RadioGroup id={`radio-${String(name)}-${String(value)}`} />
      <label htmlFor={`radio-${String(name)}-${String(value)}`}>
        <span className="text-[14px] font-normal text-[#212529]">{name}</span>
    </label> */}

      <div className="flex flex-col space-y-4">
        <div key={id} className="flex items-center space-x-2">
          <input
            type="radio"
            id={`${String(name)}-${String(id)}`}
            name={radioName}
            value={id}
            className="hidden peer"
          />
          <span className="flex items-center justify-center w-4 h-4 rounded-full border border-[rgb(138,138,142)] peer-checked:border-[#ff9100]  peer-checked:border-[5px]">
            <span className="w-0.5 h-0.5 rounded-full bg-white peer-checked:block hidden"></span>
          </span>
          <label
            htmlFor={`${String(name)}-${String(id)}`}
            className="text-sm font-medium text-gray-900 cursor-pointer"
          >
            {name}
          </label>
        </div>
      </div>
    </div>
  );
};
