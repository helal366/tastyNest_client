import React from 'react';
import errorPage from '../assets/errorPageImage.jpg'
const ErrorPage = () => {
    return (
        <div className='pt-10'>
            <img className='w-full h-[60vh]' src={errorPage} alt="Error Page Image" />
        </div>
    );
};

export default ErrorPage;