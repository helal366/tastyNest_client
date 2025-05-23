import React from 'react';
import allRecipesPage from './allRecipesPage.json'
import Lottie from 'lottie-react';

const AllRecipesPage = () => {
    return (
        <div>
            <div className='w-full h-40 flex justify-center mb-10'>
            <Lottie animationData={allRecipesPage} loop={true}></Lottie>
        </div>
        </div>
    );
};

export default AllRecipesPage;