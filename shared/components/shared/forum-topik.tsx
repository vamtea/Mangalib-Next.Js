import { ArrowRight } from 'lucide-react';
import React from 'react';
import { ForumTopikItems } from './forum-topik-items';

interface Props {
    className?: string;
}

export const ForumTopik: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <div className="flex items-center gap-2 pl-4 mb-2 ">
            <span className="text-[15px] font-bold">
                Последние темы форумы
            </span>
            <ArrowRight color="#000000" size={17} />
        </div>
        <div className="bg-white rounded-[6px] px-4">
            <ForumTopikItems />
            <ForumTopikItems />
            <ForumTopikItems />
            <ForumTopikItems />
        </div>
    </div>
  );
};