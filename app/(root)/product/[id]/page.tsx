import React from 'react';

interface Props {
    className?: string;
}

export const Page: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h1>Product page</h1>
    </div>
  );
};