import { Eye, MessagesSquare } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const ForumTopikItems: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-[10px] justify-between py-[6px]">
        <span
          className="text-[#212529] text-[14px]">
          Поиск эдиторов(оплата)
        </span>
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center text-[#8a8a8e] text-[12px]  gap-[6px]">
            28
            <Eye size={13} />
          </div>
          <div className="text-[#8a8a8e] text-[12px] flex items-center  gap-[6px]">
            0
            <MessagesSquare size={13} />
          </div>
        </div>
      </div>
    </div>
  );
};
