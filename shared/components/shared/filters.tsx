import React from "react";
import { FiltersButton } from "./filters-button";
import { GenreCard, FiltersGenreInput, FiltersCheckboxSection, FiltersFooter } from ".";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
      <div className=" sticky top-[1px] ">
    <div className="relative">
    <div className=" bg-white rounded-[8px] max-h-[calc(100vh-88px)] overflow-hidden hover:overflow-y-scroll  ">
      
      <div className="flex flex-col">
          <FiltersButton name={"Жанры"} />
          <FiltersButton name={"Тэги"} />
          <GenreCard>
            <FiltersGenreInput title={"Количество глав"} />
          </GenreCard>
          <GenreCard>
            <FiltersGenreInput title={"Год релиза"} />
          </GenreCard>
          <GenreCard>
            <FiltersGenreInput title={"Оценка"} />
          </GenreCard>
          <GenreCard>
            <FiltersGenreInput title={"Количество оценок"} />
          </GenreCard>
  
          <FiltersCheckboxSection />
  
        </div>
      </div>
          <FiltersFooter className="absolute bottom-0" />
    </div>
    </div>
  );
};
