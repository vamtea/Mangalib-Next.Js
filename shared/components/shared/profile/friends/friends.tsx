import React from "react";
import { FriendsHeader } from "./friends-header";
import { FriendsCard } from "./friends-card";

interface Props {
  className?: string;
}

export const Friends: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex flex-col  mt-4 bg-white rounded-[8px]">
      <FriendsHeader />
      <div className="grid grid-cols-3 gap-4 px-4 pb-4">
        <FriendsCard />
        <FriendsCard />
        <FriendsCard />
        <FriendsCard />
        <FriendsCard />
        <FriendsCard />
      </div>
    </div>
  );
};
