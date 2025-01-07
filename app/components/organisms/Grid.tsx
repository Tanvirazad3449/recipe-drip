"use client";

import React, { useState } from "react";
import ComponentHeader from "../molecules/ComponentHeader";
import GridItem from "../molecules/GridItem";
import { GridDataType } from "@/app/interfaces/GridDataType";


type GridProps = {
  headerText: string;
  data: GridDataType[];
  cssClass: string;
  minDisplayItems: number;
};

const Grid: React.FC<GridProps> = ({ headerText, data, cssClass, minDisplayItems }) => {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? data : data.slice(0, minDisplayItems);

  return (
    <div>
      <ComponentHeader
        headerText={headerText}
        toggle={() => setShowAll(!showAll)}
        showAll={showAll}
      />
      <div className={cssClass}>
        {itemsToShow.map((gridObj: GridDataType) => <GridItem key={gridObj.id} gridObj={gridObj} />)}
      </div>
    </div>
  );
};

export default Grid;



