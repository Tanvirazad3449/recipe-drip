"use client"
import React from 'react';
import { HeadingText } from '../atoms/Texts';
import ListItem from '../molecules/ListItems';


export default function List({ headerText, data }: any) {
  return (
    <div>
      <div className='py-2'>
        <HeadingText text={headerText} />
      </div>
      <ul className="list-none flex flex-col">
        {data.map((listObj: any) => <ListItem key={listObj.id} listObj={listObj}/>)}
      </ul>
    </div>
  );
}
