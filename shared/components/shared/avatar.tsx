import React from 'react';
import avatar from '@/shared/img/avatar.jpg'
import Image from "next/image";

interface Props {
    className?: string;
}

export const Avatar: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <Image src={avatar} alt="avatar" width={40} height={40} />
    </div>
  );
};