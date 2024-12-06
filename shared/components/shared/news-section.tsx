import { Newspaper } from 'lucide-react';
import React from 'react';

interface Props {
    className?: string;
}

export const NewsSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <div className="flex justify-between">
            <div>
                <div>
                <Newspaper color="#000000" />
                Новость
                </div>
                <span>3 часа назад</span>
            </div>
        </div>
    </div>
  );
};