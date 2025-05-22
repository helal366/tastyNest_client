import React from 'react';
import foodThree from './foodThree.json'
import Lottie from 'lottie-react';

const FoodThree = () => {
    return (
        <div className='w-60 h-60'>
            <Lottie animationData={foodThree} loop={true}></Lottie>
        </div>
    );
};

export default FoodThree;