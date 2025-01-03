// app/components/Grid/Grid.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react";
import ComponentHeader from "./ComponentHeader";
import { LargeGridItem, SmallGridItem } from "./molecules/GridItems";

interface Grid {
  id: number;
  name: string;
}

interface GridProps {
  headerText: string;
  data: Grid[];
  type: string;
}

const Grid: React.FC<GridProps> = ({ headerText, data, type }) => {
  const [showAll, setShowAll] = useState(false);

  // Determine items to display based on the `showAll` state
  const itemsToShow = showAll ? data : data.slice(0, 4);

  return (
    <div className="mb-10 px-24">
      <div className="px-4">
        <ComponentHeader
          headerText={headerText}
          toggle={() => setShowAll(!showAll)}
          showAll={showAll}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:mx-4">
        {itemsToShow.map((gridObj) => {
          switch (type) {
            case "small":
              return (
                  <SmallGridItem  key={gridObj.id} gridObj={gridObj} href={`/recipe/${gridObj.id}`}/>
              );
              case "large":
                return (
                  <LargeGridItem  key={gridObj.id} gridObj={gridObj} href={`/recipe/${gridObj.id}`}/>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Grid;
