import Link from "next/link";
import React from "react";
import { RegularText } from "../atoms/Texts";
interface Grid {
  id: number;
  name: string;
}
interface GridItem {
  gridObj: Grid;
  href: string;
}

const LargeGridItem = ({ gridObj, href }: GridItem) => {
  return (
    <Link href={href}>
      <div className="w-full bg-slate-100 rounded-lg flex flex-col items-center justify-start pb-2 hover:bg-slate-200 hover:cursor-pointer">
        <img
          src={`/images/${gridObj.id}.jpg`}
          alt={gridObj.name}
          className="rounded-tr-lg rounded-tl-lg w-full h-48 object-cover mb-2"
        />
        <RegularText text={gridObj.name} />
      </div>
    </Link>
  )
}

const SmallGridItem = ({ gridObj, href }: GridItem) => {
  return (
    <Link href={href}>
      <div className="bg-slate-100 rounded-md p-4 text-center flex flex-row items-center space-x-4  hover:bg-slate-200 hover:cursor-pointer">
        <img
          src={`/icons/${gridObj.id}.png`}
          alt={gridObj.name}
          className="rounded-lg w-16 sm:w-16 md:w-10 h-auto"
        />
        <RegularText text={gridObj.name} />
      </div>
    </Link>
  )
}

export {
  LargeGridItem,
  SmallGridItem
}