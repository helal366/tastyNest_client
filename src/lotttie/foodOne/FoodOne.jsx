import React from 'react';
import foodOne from './foodOne.json';
import Lottie from 'lottie-react';

const FoodOne = () => {

    return (
        <div className='w-60 h-60'>
            <Lottie animationData={foodOne} loop={true}></Lottie>
        </div>
    );
};

export default FoodOne;