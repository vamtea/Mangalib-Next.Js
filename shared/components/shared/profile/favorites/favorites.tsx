import React from 'react';
import { FavoritesLeftSide } from './favorites-left-side';
import { FavoritesRightSide } from './favorites-right-side';

interface Props {
    className?: string;
}

export const Favorites: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex gap-4 mt-4">
        <FavoritesLeftSide />
        <FavoritesRightSide />
    </div>
  );
};