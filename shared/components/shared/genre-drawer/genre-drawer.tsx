
import React from "react";
import GenreDrawerList from "./genre-drawer-list";
import GenreDrawerHeader from "./genre-drawer-header";
import GenreDrawerFooter from "./genre-drawer-footer";

interface Props {
  className?: string;
  onClickBack?: () => void;
}

export const GenreDrawer: React.FC<Props> = ({ className, onClickBack })  => {
  const handleBackClick = () => {
    onClickBack?.()
  }
 
  // const handleBackClick = () => {
  //   console.log('back')
  // }

  return (
    <div className=" w-full rounded-[8px] max-h-[calc(100vh-88px)] bg-white z-50 relative flex flex-col overflow-hidden ">
      <GenreDrawerHeader onClickBack={handleBackClick} className="sticky rounded-t-[8px] z-20 top-0 bg-white" />
      <GenreDrawerList className="overflow-y-auto flex-grow rounded-b-[8px] " />
      <GenreDrawerFooter className="rounded-b-[8px] flex-shrink-0 z-10 hover:overflow-y-auto" />

    </div>
  );
}
