"use client";

import React from "react";

import { Recipe } from "@/app/types/domain/recipe/recipe";
import SectionHeader from "@/app/components/shared/layout/SectionHeader";
import { NotificationBlock } from "@/app/components/ui/NotificationBlock";
import GridItemDiet from "./GridItemDiet";
import GridItemRecipe from "./GridItemRecipe";
import GridItemMealType from "./GridItemMealType";
import GridSkeleton from "./GridSkeleton";
import { DietType, MealType } from "@/app/types/domain/recipe/attributes";
import { useToggle } from "@/app/hooks/useToggle";

type GridProps<T> = {
  headerText: string;
  data: T[];
  cssClass: string;
  minDisplayItems: number;
  loading: boolean;
  type: "recipe" | "diet" | "mealType";
};

const Grid = ({ headerText, data, cssClass, minDisplayItems, loading, type }: GridProps<DietType | MealType | Recipe>) => {
  const { value: isExpanded, toggle: setIsExpanded } = useToggle();
  const itemsToShow = isExpanded ? data : data.slice(0, minDisplayItems);

  const renderGridItem = (gridObj: DietType | MealType | Recipe) => {
    switch (type) {
      case "diet":
        return <GridItemDiet key={gridObj.id} gridObj={gridObj as DietType} />;
      case "recipe":
        return <GridItemRecipe key={gridObj.id} gridObj={gridObj as Recipe} />;
      case "mealType":
        return <GridItemMealType key={gridObj.id} gridObj={gridObj as MealType} />;
      default:
        return null;
    }
  };
  return (
    <div>
      <SectionHeader
        headerText={headerText}
        setIsExpanded={setIsExpanded}
        isExpanded={isExpanded}
        showExpandButton={true}
      />
      <div>
        {loading ?
          <div className={cssClass}><GridSkeleton numItems={12}/></div>
          :
          <>
            {data.length > 0 ?
                <div className={cssClass}>
                  {itemsToShow.map(renderGridItem)}
                </div>
                :
                <NotificationBlock type="info" message="No recipes found" />
            }
          </>
        }
      </div>
    </div>
  );
};

export default Grid;



