"use client"
import React from 'react';
import HeaderText from './atoms/HeaderText';


export default function List({ headerText, data }: any) {


  return (

     
      <div >
        <div className='py-2'>
          <HeaderText text={headerText} />
        </div>
        <ul className="list-none flex flex-col">
          {data.map((e:any) => (
            <li
              key={e.id}
              className=" bg-slate-100 rounded-lg flex items-center justify-start p-4 mb-2 hover:bg-slate-200 hover:cursor-pointer font-serif"
            >
              <img
                src={`/countries/${e.id}.png`}
                alt={e.name}
                className="rounded-lg w-6 sm:w-6 md:w-6 h-auto mr-4"
              />
              {e.name}
            </li>
          ))}
        </ul>
      </div>
  );
}
