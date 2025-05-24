import Lottie from 'lottie-react';
import React from 'react';
import three from './lottieMyrecipeThree.json'
import one from './lottieMyRecipeOne.json';
import two from './lottieMyRecipeTwo.json';

const LottieMyRecipe = () => {
    return (
        <div>
            <div className='w-full flex justify-center mb-10 gap-5'>
            <Lottie className='max-h-[160px] max-w-[160px]' animationData={two} loop={true}></Lottie>
            <Lottie className='max-h-[160px] max-w-[160px]' animationData={three} loop={true}></Lottie>
            <Lottie className='max-h-[160px] max-w-[160px]' animationData={one} loop={true}></Lottie>
        </div>
        </div>
    );
};

export default LottieMyRecipe;