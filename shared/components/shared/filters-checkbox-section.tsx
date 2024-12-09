import React from 'react';

import { GenreCard, FiltersCheckboxCard } from ".";
import { ageRating, other, releasedFormat, status, translateStatus, type } from "@/prisma/constants";

interface Props {
    className?: string;
}

export const FiltersCheckboxSection: React.FC<Props> = ({ className }) => {
  return (
    <div className="">
        <GenreCard>
          <span>Возрастный рейтинг</span>
          <div className="grid grid-cols-2 gap-2">
            {ageRating.map((item, index) => (
              <FiltersCheckboxCard
                key={index}
                title={"Возрастной рейтинг"}
                name={item.name}
                value={item.id}
                text={item.name}
              />
            ))}
          </div>
        </GenreCard>
        <GenreCard>
          <span>Возрастный рейтинг</span>
          <div className="grid grid-cols-2 gap-2">
            {type.map((item, index) => (
              <FiltersCheckboxCard
                key={index}
                title={"Возрастной рейтинг"}
                name={item.name}
                value={item.id}
                text={item.name}
              />
            ))}
          </div>
        </GenreCard>
        <GenreCard>
          <span>Возрастный рейтинг</span>
          <div className="grid grid-cols-2 gap-2">
            {releasedFormat.map((item, index) => (
              <FiltersCheckboxCard
                key={index}
                title={"Возрастной рейтинг"}
                name={item.name}
                value={item.id}
                text={item.name}
              />
            ))}
          </div>
        </GenreCard>
        <GenreCard>
          <span>Возрастный рейтинг</span>
          <div className="grid grid-cols-2 gap-2">
            {status.map((item, index) => (
              <FiltersCheckboxCard
                key={index}
                title={"Возрастной рейтинг"}
                name={item.name}
                value={item.id}
                text={item.name}
              />
            ))}
          </div>
        </GenreCard>
        <GenreCard>
          <span>Возрастный рейтинг</span>
          <div className="grid grid-cols-2 gap-2">
            {translateStatus.map((item, index) => (
              <FiltersCheckboxCard
                key={index}
                title={"Возрастной рейтинг"}
                name={item.name}
                value={item.id}
                text={item.name}
              />
            ))}
          </div>
        </GenreCard>
        <GenreCard>
          <span>Возрастный рейтинг</span>
          <div className="grid grid-cols-2 gap-2">
            {other.map((item, index) => (
              <FiltersCheckboxCard
                key={index}
                title={"Возрастной рейтинг"}
                name={item.name}
                value={item.id}
                text={item.name}
              />
            ))}
          </div>
        </GenreCard>
    </div>
  );
};