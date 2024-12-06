import Image from 'next/image';
import React from 'react';
import image from '@/shared/img/image-2.jpg'


interface Props {
    className?: string;
}

export const CatalogSideCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <div>
            <div>
                <Image src={image} alt="image" width={80} height={112}/>
            </div>
            <div className="flex flex-col">
                <span>Поднятие уровня в одиночку</span>
                <p>Манхва</p>
            </div>
        </div>
    </div>
  );
};