import Lottie from 'lottie-react';
import React from 'react';
import foodTwo from './foodTwo.json'

const FoodTwo = () => {
    return (
        <div className='w-60 h-60'>
            <Lottie animationData={foodTwo} loop={true}></Lottie>
        </div>
    );
};

export default FoodTwo;