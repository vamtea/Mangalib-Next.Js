"use client";

import React, { Suspense } from "react";
import { FiltersButton } from "./filters-button";
import {
  GenreCard,
  FiltersGenreInput,
  FiltersCheckboxSection,
  FiltersFooter,
  GenreDrawer,
} from ".";
import SuspenseFallback from "./suspense";
import { TagsDrawer } from "./tags-drawer";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const [filterDrawer, setFilterDrawer] = React.useState<number | null>(null);
  const filterBtn = [
    {
      name: "Жанры",
    },
    {
      name: "Тэги",
    },
  ];
  // const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className=" sticky top-[72px] z-10  ">
      <div className="relative">
        {filterDrawer === null && (
          <>
            <div className=" bg-white rounded-[8px] max-h-[calc(100vh-88px)] overflow-hidden hover:overflow-y-scroll sticky top-0 z-49 ">
              <div className="flex flex-col">
                {filterBtn.map((item, index) => (
                  <FiltersButton
                    onClick={() => {
                      setFilterDrawer(index);
                    }}
                    key={index}
                    name={item.name}
                  />
                ))}

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
          </>
        )}
        {filterDrawer === 0 && (
          // <div className={`fixed top-0 right-0 h-full w-64 bg-gray-200 transition-transform duration-500 ${
          //   filterDrawer === 0 ? "translate-x-0" : "translate-x-full"
          // }`}>

          <div className="absolute top-0 left-0 right-0 z-60 ">
            <motion.div
              initial={{ x: "10%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <GenreDrawer
                className=""
                onClickBack={() => console.log("back")}
              />
            </motion.div>
          </div>

          // </div>
        )}
        {filterDrawer === 1 && (
          <div className="absolute top-0 left-0 right-0 z-60 ">
            <motion.div
              initial={{ x: "40%" }}
              animate={{ x: 0 }}
              exit={{ x: "10%" }}
              transition={{ duration: 0.7 }}
              className=""
            >
              <TagsDrawer className="" />
            </motion.div>
          </div>
        )}
      </div>
       {/* <div className="relative ">
      <AnimatePresence mode="wait">
        {filterDrawer === null && (
          <motion.div
            key="filter-main"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.1 }}
            className="bg-white rounded-[8px] max-h-[calc(100vh-88px)] overflow-hidden hover:overflow-y-scroll sticky top-0 z-49"
          >
            <div className="flex flex-col">
              {filterBtn.map((item, index) => (
                <FiltersButton
                  onClick={() => setFilterDrawer(index)}
                  key={index}
                  name={item.name}
                />
              ))}

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
            <FiltersFooter className="absolute bottom-0" />
          </motion.div>
        )}

        {filterDrawer === 0 && (
          <motion.div
            key="genre-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 right-0 z-60"
          >
            <GenreDrawer
              className=""
              onClickBack={() => setFilterDrawer(null)}
            />
          </motion.div>
        )}

        {filterDrawer === 1 && (
          <motion.div
            key="tags-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 right-0 z-60"
          >
            <TagsDrawer
              className=""
              onClickBack={() => setFilterDrawer(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div> */}
    {/* <div className="relative w-full h-full overflow-x-hidden">
      <AnimatePresence mode="wait">
        {filterDrawer === null && (
          <motion.div
            key="filter-main"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white rounded-[8px] z-50"
          >
            <div className="flex flex-col">
              {filterBtn.map((item, index) => (
                <button
                  onClick={() => setFilterDrawer(index)}
                  key={index}
                  className="py-2 px-4 text-sm"
                >
                  {item.name}
                </button>
              ))}

              <div>Содержимое фильтров...</div>
            </div>
          </motion.div>
        )}

        {filterDrawer === 0 && (
          <motion.div
            key="genre-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-blue-200 z-50"
          >
            <div className="p-4">
              <button
                onClick={() => setFilterDrawer(null)}
                className="py-2 px-4 bg-blue-500 text-white rounded"
              >
                Назад
              </button>
              <div>Содержимое жанров...</div>
            </div>
          </motion.div>
        )}

        {filterDrawer === 1 && (
          <motion.div
            key="tags-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-green-200 z-50"
          >
            <div className="p-4">
              <button
                onClick={() => setFilterDrawer(null)}
                className="py-2 px-4 bg-green-500 text-white rounded"
              >
                Назад
              </button>
              <div>Содержимое тегов...</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div> */}
    </div>
  );
};
