import React from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from '../components/RecipeCard';

const AllRecipes = () => {
    const allRecipes=useLoaderData();
    console.log(allRecipes);
    return (
        <div>
            <h2 className='text-center text-2xl font-semibold py-4'>All recipes: {allRecipes?.length || 0}</h2>
            <div>
                {
                    allRecipes?.map((recipe, i)=><RecipeCard key={i} recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;