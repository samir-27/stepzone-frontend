import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from 'react-icons/gi';
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const toggleNavbar = () => {
        setNavbar(!navbar);
    };

    const logo = (
        <Link to="/">
            <h2 className="text-2xl text-rose-600 font-bold">StepZone</h2>
        </Link>
    );

    const hamburgerButton = (
        <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={toggleNavbar}
        >
            {navbar ? (
                <GiCancel size={40} />
            ) : (
                <GiHamburgerMenu size={40} />
            )}
        </button>
    );

    const navigationLinks = (
        <ul className={`md:h-auto items-center justify-center md:flex md:bg-white bg-gray-200   ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
            <li className="text-xl text-gray-900 md:hover:text-rose-500 hover:text-rose-500 py-2 xl:px-6 lg:px-5 md:px-3 sm:px-2 text-center">
                <Link to="/">Home</Link>
            </li>
            <li className="text-xl text-gray-900 md:hover:text-rose-500 hover:text-rose-500 py-2 xl:px-6 lg:px-5 md:px-3 sm:px-2 text-center">
                <Link to="/products">Products</Link>
            </li>
            <li className="text-xl text-gray-900 md:hover:text-rose-500 hover:text-rose-500 py-2 xl:px-6 lg:px-5 md:px-3 sm:px-2 text-center">
                <Link to="/about">About Us</Link>
            </li>
            <li className="text-xl text-gray-900 md:hover:text-rose-500 hover:text-rose-500 py-2 xl:px-6 lg:px-5 md:px-3 sm:px-2 text-center">
                <Link to="/contact">Contact Us</Link>
            </li>
            <li>
                <div className=' flex py-2 justify-center'>

                    <Link to="/wishlist" className='px-1 my-auto'>
                        <FaRegHeart className='' size={30} />
                    </Link>
                    <Link to="/cart" className='px-1'>
                        <TiShoppingCart className='mx-auto' size={40} />
                    </Link>
                    <Link to="/profile" className='px-1'>
                        <CgProfile className='mx-auto' size={40} />
                    </Link>
                </div>
            </li>




            {/* <li className="text-xl text-gray-900 py-2 md:px-4 text-center md:hover:text-gray-600">
        <Link to="/login" className="text-white bg-red-600 p-2 px-5 rounded-md">Login</Link>
      </li>
      <li className="text-xl text-gray-900 py-2 md:px-4 text-center md:hover:text-gray-600">
        <Link to="/register" className="text-red-600 bg-white p-2 px-5 rounded-md border-red-600 border">Register</Link>
      </li> */}
        </ul>
    );

    return (
        <div className=' shadow-md h-20 z-50 fixed top-0 w-screen bg-white '>
            <nav className="w-full h-20 ">
                <div className="container h-full mx-auto xl:px-40 lg:px-28 md:px-10 px-5">

                    <div className="justify-between md:items-center md:flex h-full">
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            {logo}
                            <div className="md:hidden bg">{hamburgerButton}</div>
                        </div>

                        <div>{navigationLinks}</div>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
