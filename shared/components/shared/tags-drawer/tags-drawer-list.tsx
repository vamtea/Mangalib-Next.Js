"use client";

import { Api } from "@/shared/services/api-client";
import React from "react";
import { Checkbox, FiletrCheckbox } from "../../ui";
import { tags } from "@/prisma/constants";

interface Props {
  className?: string;
}

export const TagsDrawerList: React.FC<Props> = ({ className }) => {
  const [genre, setGenre] = React.useState<{ name: string; id: number }[]>([]);


  // React.useEffect(() => {
  //   const fetch = async () => {
  //     const genre = await Api.genre.getAll();

  //     setGenre(genre);
  //     console.log(genre);
  //   };
  //   fetch();
  // }, []);

  // 'use client'

  return (
    <div className="flex-grow hover:overflow-y-auto">
      <ul className="flex flex-col gap-2 w-full  py-2 px-3">
        {tags.map((item, index) => (
          <li className="flex gap-[10px] items-center cursor-pointer">
            <FiletrCheckbox id={`checkbox-${String(item.name)}-${String(index)}`} />
            <label htmlFor={`checkbox-${String(item.name)}-${String(index)}`}>
              <span className="text-[14px] font-normal text-[#212529] cursor-pointer">
                {item.name}
              </span>
            </label>
          </li>

        ))}
      </ul>
    </div>
  );
};


