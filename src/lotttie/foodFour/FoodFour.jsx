import Lottie from 'lottie-react';
import React from 'react';
import foodFour from './foodFour.json'

const FoodFour = () => {
    return (
        <div className='w-60 h-60'>
            <Lottie animationData={foodFour} loop={true}></Lottie>
        </div>
    );
};

export default FoodFour;