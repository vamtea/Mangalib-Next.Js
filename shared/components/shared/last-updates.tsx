import React from "react";
import { LastUpdatesCard } from "./last-updates-card";
import { Container } from ".";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const LastUpdates: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-white w-[610px] py-4 px-4 rounded-md">
      <div className="flex justify-between pb-2">
        <span className="text-[#212529] text-[15px] font-bold">Последние обновления</span>
        <div className="flex gap-4">
          <span className={cn("text-[#212529]", className)}>Все обновления</span>
          <span>Мои обновления</span>
        </div>
      </div>
      <div className="border-b-[0.1px] " />

      <LastUpdatesCard />
      <LastUpdatesCard />
      <LastUpdatesCard />
      <LastUpdatesCard />
      <LastUpdatesCard />
      <LastUpdatesCard />
      <LastUpdatesCard />
      <LastUpdatesCard />
      <LastUpdatesCard />
      <LastUpdatesCard />
      <LastUpdatesCard />
      <LastUpdatesCard />
      <LastUpdatesCard />
      <LastUpdatesCard />
      <LastUpdatesCard />
    </div>
  );
};
