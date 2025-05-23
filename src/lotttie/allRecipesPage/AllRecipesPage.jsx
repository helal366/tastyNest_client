import React from 'react';
import allRecipesPage from './allRecipesPage.json'
import allRecipesPageTwo from './lottieAllRecipesPageTwo.json'
import Lottie from 'lottie-react';

const AllRecipesPage = () => {
    return (
        <div>
            <div className='w-full h-40 flex justify-center mb-10 gap-5'>
                
            <Lottie animationData={allRecipesPage} loop={true}></Lottie>
            <Lottie animationData={allRecipesPageTwo} loop={true}></Lottie>
        </div>
        </div>
    );
};

export default AllRecipesPage;