"use client"
import React from 'react';
import { Container } from './atoms/Container';
import { HeadingText, RegularText } from './atoms/Texts';


export default function List({ headerText, data }: any) {
  return (
    <div className='px-4 md:pr-28'>
      <div className='py-2'>
        <HeadingText text={headerText} />
      </div>
      <ul className="list-none flex flex-col">
        {data.map((e: any) => (
          <Container key={e.id} className="flex items-center justify-start p-4 mb-2">
          
            <img
              src={`/countries/${e.id}.png`}
              alt={e.name}
              className="rounded-lg w-6 sm:w-6 md:w-6 h-auto mr-4"
            />
            <RegularText text={e.name}/>
          </Container>
        ))}
      </ul>
    </div>
  );
}
