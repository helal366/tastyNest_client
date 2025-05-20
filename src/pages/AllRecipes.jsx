import React from 'react';
import { useLoaderData } from 'react-router';

const AllRecipes = () => {
    const allRecipes=useLoaderData();
    console.log(allRecipes);
    return (
        <div>
            <h2 className='text-center text-2xl font-semibold py-4'>All recipes: {allRecipes.length}</h2>
            <div>
                {
                    allRecipes.map((recipe, i)=>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;