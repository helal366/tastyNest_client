import Lottie from 'lottie-react';
import React from 'react';
// import three from './lottieMyrecipeThree.json'
// import one from './lottieMyRecipeOne.json';
import two from './lottieMyRecipeTwo.json';

const LottieMyRecipe = () => {
    return (
        <div>
            <div className='w-full h-40 flex justify-center mb-10 gap-5'>
            <Lottie animationData={two} loop={true}></Lottie>
            {/* <Lottie animationData={three} loop={true}></Lottie> */}
            {/* <Lottie animationData={one} loop={true}></Lottie> */}
        </div>
        </div>
    );
};

export default LottieMyRecipe;