import React from 'react';


export const Page = ({ 
  params: { id },
}: {
  params: { id: string };
}) => {
  return (
    <div className="">
      <h1>Product page {id}</h1>
    </div>
  );
};