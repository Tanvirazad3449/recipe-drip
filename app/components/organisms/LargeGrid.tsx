// app/components/Grid/Grid.tsx
"use client";

import React, { useState } from "react";
import ComponentHeader from "../ComponentHeader";
import { LargeGridItem } from "../molecules/GridItems";
import { Grid } from "@/app/interfaces/StaticGridItem";


interface GridProps {
  headerText: string;
  data: Grid[];
}

const LargeGrid: React.FC<GridProps> = ({ headerText, data }) => {
  const [showAll, setShowAll] = useState(false);

  // Determine items to display based on the `showAll` state
  const itemsToShow = showAll ? data : data.slice(0, 4);

  return (
    <div className="mb-10 px-4 md:px-24">
      <div className="px-0 md:px-4">
        <ComponentHeader
          headerText={headerText}
          toggle={() => setShowAll(!showAll)}
          showAll={showAll}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:mx-4">
        {itemsToShow.map((gridObj) => <LargeGridItem key={gridObj.id} gridObj={gridObj} href={`/recipe/${gridObj.id}`} /> )}
      </div>
    </div>
  );
};

export default LargeGrid;
