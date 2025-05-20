import React from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from '../components/RecipeCard';

const AllRecipes = () => {
    const allRecipes=useLoaderData();
    console.log(allRecipes);
    return (
        <div>
            <h2 className='text-center text-2xl font-semibold py-4'>All recipes: {allRecipes?.length || 0}</h2>
            <div className='grid grid-cols-4 gap-4 py-4'>
                {
                    allRecipes?.map((recipe)=><RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;