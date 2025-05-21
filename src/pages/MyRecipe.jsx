import React, { useContext } from 'react';
import AuthContext from '../contexts-providers/AuthContext';
import MyRecipeCard from '../components/MyRecipeCard';

const MyRecipe = () => {
    const {allRecipes, user}=useContext(AuthContext);
    const userEmail=user?.email;
    const filteredRecipesByEmail=allRecipes.filter(recipe=>recipe?.adderEmail===userEmail)
    console.log(filteredRecipesByEmail);
    return (
        <div>
            <h2 className='text-center text-2xl font-semibold py-4'>My recipes: {filteredRecipesByEmail?.length || 0}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 py-4'>
                {
                    filteredRecipesByEmail?.map((recipe)=><MyRecipeCard key={recipe._id} recipe={recipe}></MyRecipeCard>)
                }
            </div>
        </div>
    );
};

export default MyRecipe;