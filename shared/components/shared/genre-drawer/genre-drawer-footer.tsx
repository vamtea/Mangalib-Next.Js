import React from "react";

interface Props {
  className?: string;
}

const GenreDrawerFooter: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="absolute bottom-0 w-full rounded-b-[8px] pt-2 px-3 pb-[10px] bg-white">
        <div className="w-full rounded-[6px]  bg-[#f2f2f3] h-[32px] item-center flex justify-center">
          <button className="px-[14px]">
            Выбрать
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenreDrawerFooter;
