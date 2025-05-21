import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='bg-teal-200/40 min-h-screen py-10'>

            <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default AuthLayout;