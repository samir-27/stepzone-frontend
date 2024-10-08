import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className='py-10 container mx-auto xl:px-40 lg:px-28 md:px-10 px-5'>
      <div className="md:flex gap-5">
        <div className='md:w-1/4 '>

        <nav className='md:fixed md:w-56 w-full inline md:mb-0 mb-6'>
          <ul className='space-y-6'>
            <li>
              <Link to="." className='text-gray-700 font-bold bg-gray-100 p-4 rounded-lg shadow-md block w-full'>
                Add Product
              </Link>
            </li>
            <li>
              <Link to="allproducts" className='text-gray-700 font-bold bg-gray-100 p-4 rounded-lg shadow-md block w-full'>
                All Products
              </Link>
            </li>
            <li>
              <Link to="allusers" className='text-gray-700 font-bold bg-gray-100 p-4 rounded-lg shadow-md block w-full'>
                All Users
              </Link>
            </li>
          </ul>
        </nav>
        </div>
        <div className='md:w-3/4 p-8 bg-white shadow-lg rounded-lg'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
