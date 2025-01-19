import React from 'react';

interface GridSkeletonProps{
  numItems: number
}
const GridSkeleton = ({numItems}:GridSkeletonProps) => {
  
  const skeletons = Array(numItems).fill(null);

  return (
    <>
        {skeletons.map((_, index) => (
          <div
          key={index}
          className="w-full h-48 object-cover mb-4 animate-pulse bg-gray-100"
          />
        ))}
        </>
  );
};

export default GridSkeleton;