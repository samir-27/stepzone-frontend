import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <h1 className="self-center text-2xl font-semibold text-sky-900">StepZone</h1>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link className='text-xl text-gray-600 hover:text-gray-400 mx-2' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='text-xl text-gray-600 hover:text-gray-400 mx-2' to="/products">Product</Link>
                        </li>
                        <li>
                            <Link className='text-xl text-gray-600 hover:text-gray-400 mx-2' to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='text-xl text-gray-600 hover:text-gray-400 mx-2' to="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">
                    © 2024 <a href="https://flowbite.com/" className="hover:underline">StepZone</a>. All Rights Reserved By Samir.
                </span>
            </div>
        </footer>
    );
}

export default Footer