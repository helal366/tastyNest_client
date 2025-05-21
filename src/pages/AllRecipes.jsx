import React, { useContext } from 'react';

import RecipeCard from '../components/RecipeCard';
import AuthContext from '../contexts-providers/AuthContext';

const AllRecipes = () => {
    const {selectedCuisine,allRecipes}=useContext(AuthContext);
    console.log(selectedCuisine);
    
    
    // console.log(allRecipes);
    const filteredRecipes=selectedCuisine==='All'?allRecipes:allRecipes.filter(recipe=>recipe.cuisineType===selectedCuisine)
    return (
        <div className='padding'>
            <h2 className='text-center text-2xl font-semibold py-4'>Total recipes: {filteredRecipes?.length || 0}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
                {
                    filteredRecipes?.map((recipe)=><RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;