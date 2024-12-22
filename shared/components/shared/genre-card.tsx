import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const GenreCard: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn(" px-3 py-2", className)}>
      <div className="gap-2 flex flex-col text-[14px] font-semibold">
        {children}
      </div>
    </div>
  );
};
