import React from 'react';
import errorPage from '../assets/errorPageImage.jpg'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <>
        <div className='pt-10'>
            <img className='w-full h-[60vh]' src={errorPage} alt="Error Page Image" />
        </div>
        <div className='flex justify-center my-8'>
            <Link>
            <button className='btn bg-[#5f7e4580] hover:bg-[#5f7e45] hover:text-white'>Back to Home</button>
            </Link>
        </div>
        </>
    );
};

export default ErrorPage;