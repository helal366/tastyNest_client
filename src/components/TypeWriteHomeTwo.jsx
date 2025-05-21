import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const TypeWriteHomeTwo = () => {
    const [text]=useTypewriter({
        words:['explore, share, and manage recipes with ease and comfort.',"add their own recipes, browse others' creations, like and save favorites to a wishlist.", "discover, study and make them progress with the cooking instructions and ingredients of the most popular dishes."],
        loop:0
    })
    return (
        <div className='py-10 px-6 flex flex-col gap-5 justify-center items-start border border-teal-600 rounded m-3 bg-[#fe9eb9] shasow-xl'>
            <h1 className='text-3xl font-semibold'><i className='text-purple-600'>tastyNest </i>is a dynamic and user-friendly web app designed for food lovers.</h1>
            <h1 className='text-3xl font-semibold'>Here, Users Can <span className='text-teal-700'>{text}</span><Cursor></Cursor> </h1>
        </div>
    );
};

export default TypeWriteHomeTwo;