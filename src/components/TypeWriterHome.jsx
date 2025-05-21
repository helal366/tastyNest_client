import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const TypeWriterHome = () => {
    const [text]=useTypewriter({
        words:['See Different Types of Recipes With Proper Cooking Instructions.', 'See Different Recipes From Different Region.', 'Add Your Recipe.', 'Update or Edit Your Recipes.', 'Delete Your Recipes.', 'Find The Cooking Ingredients of Each Recipe.'],
        loop: 0,
    });
    return (
        <div className='py-10 px-6 flex flex-col gap-5 justify-center items-start border border-teal-600 rounded m-3 bg-[#fe9eb9] shasow-xl'>
            <h1 className='text-3xl font-semibold'>Welcome To The <i className='text-purple-600'>tastyNest </i>Cooking Recipes Website.</h1>
            <h1 className='text-3xl font-semibold'>Here You Can <span className='text-teal-700'>{text}</span><Cursor></Cursor> </h1>
        </div>
    );
};

export default TypeWriterHome;