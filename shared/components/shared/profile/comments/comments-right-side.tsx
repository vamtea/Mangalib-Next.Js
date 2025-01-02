import React from 'react';
import { CommentsCard } from './comments-card';

interface Props {
    className?: string;
}

export const CommentsRightSide: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex flex-col bg-white rounded-[8px]">
        <CommentsCard />
        <CommentsCard />
        <CommentsCard />
        <CommentsCard />
    </div>
  );
};