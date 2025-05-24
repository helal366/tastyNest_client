import React from 'react';
import allRecipesPage from './allRecipesPage.json'
import allRecipesPageTwo from './lottieAllRecipesPageTwo.json'
import Lottie from 'lottie-react';

const AllRecipesPage = () => {
    return (
        <div>
            <div className='w-full flex justify-center mb-10 gap-5'>
                
            <Lottie className='max-h-[160px] max-w-[160px] ' animationData={allRecipesPage} loop={true}></Lottie>
            <Lottie className='max-h-[160px] max-w-[160px]' animationData={allRecipesPageTwo} loop={true}></Lottie>
        </div>
        </div>
    );
};

export default AllRecipesPage;