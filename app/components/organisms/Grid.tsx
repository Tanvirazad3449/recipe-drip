"use client";

import React, { useState } from "react";
import SectionHeader from "../molecules/SectionHeader";
import GridItem from "../molecules/GridItem";
import { GridDataType } from "@/app/interfaces/GridDataType";

type GridProps = {
  headerText: string;
  data: GridDataType[];
  cssClass: string;
  minDisplayItems: number;
};

const Grid: React.FC<GridProps> = ({ headerText, data, cssClass, minDisplayItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const itemsToShow = isExpanded ? data : data.slice(0, minDisplayItems);
  function toggleItemView():void{
    setIsExpanded((prev)=>!prev)
  }
  return (
    <div>
      <SectionHeader
        headerText={headerText}
        toggleItemView={toggleItemView}
        isExpanded={isExpanded}
      />
      <div className={cssClass}>
        {itemsToShow.map((gridObj: GridDataType) => <GridItem key={gridObj.id} gridObj={gridObj} />)}
      </div>
    </div>
  );
};

export default Grid;



