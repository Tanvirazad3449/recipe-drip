"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import ComponentHeader from './ComponentHeader';
import { Recipe } from '../interfaces/Recipe';
import RecipeStats from './molecules/RecipeStats';
import { RegularText } from './atoms/Texts';
import { Container } from './atoms/Container';

interface RecipeListProps {
    headerText: string;
    data: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ headerText, data }) => {
    const [showAll, setShowAll] = useState(false);
    const itemsToShow = showAll ? data : data.slice(0, 9);

    return (
        <div >
            <ComponentHeader headerText={headerText} toggle={() => setShowAll(!showAll)} showAll={showAll} />
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {itemsToShow.map((e) => (
                    <Link href={`/recipe/${e.id}`} key={e.image}>
                        <Container className="flex flex-col columns-2 items-start justify-start h-72">
                            <img
                                src={`/recipes/${e.id}.jpg`}
                                alt={e.image}
                                className="rounded-tr-lg rounded-tl-lg w-full h-40 object-cover center"
                            />
                            <div className='p-4 pt-2 w-full'>
                                <RecipeStats recipe={e} />
                                <RegularText text={e.title} className='mt-2' />
                            </div>
                        </Container>

                    </Link>
                ))}
            </div>

        </div>

    );
}


export default RecipeList