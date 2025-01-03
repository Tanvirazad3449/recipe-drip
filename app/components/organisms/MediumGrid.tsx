// app/components/Grid/Grid.tsx
"use client";

import React, { useState } from "react";
import ComponentHeader from "../ComponentHeader";
import { MediumGridItem } from "../molecules/GridItems";
import { Recipe } from "@/app/interfaces/Recipe";

interface GridProps {
  headerText: string;
  data: Recipe[];
}

const MediumGrid: React.FC<GridProps> = ({ headerText, data }) => {
  const [showAll, setShowAll] = useState(false);

  // Determine items to display based on the `showAll` state
  const itemsToShow = showAll ? data : data.slice(0, 9);

  return (
    <div className="mb-10 px-4 md:px-20 ml-0 md:ml-8">
        <ComponentHeader
          headerText={headerText}
          toggle={() => setShowAll(!showAll)}
          showAll={showAll}
        />
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-3 gap-4">
        {itemsToShow.map((gridObj) => <MediumGridItem key={gridObj.image} gridObj={gridObj} href={`/recipe/${gridObj.id}`} />)}
      </div>
    </div>
  );
};

export default MediumGrid;
