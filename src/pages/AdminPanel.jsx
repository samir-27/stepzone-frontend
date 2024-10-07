import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminPanel = () => {
  return (
<div className='py-10 container mx-auto xl:px-40 lg:px-28 md:px-10 px-5'>
      <div className="flex gap-5">
        <nav className='w-1/4'>
          <ul className='space-y-6'>
            <li>
              <Link to="." className='text-gray-700 font-bold bg-gray-100 p-4 rounded-lg shadow-md block w-full'>
                Add Product
              </Link>
            </li>
            <li>
              <Link to="changepassword" className='text-gray-700 font-bold bg-gray-100 p-4 rounded-lg shadow-md block w-full'>
                All Products
              </Link>
            </li>
            <li>
              <Link to="order-history" className='text-gray-700 font-bold bg-gray-100 p-4 rounded-lg shadow-md block w-full'>
                All Users
              </Link>
            </li>
            <li>
              <Link to="wishlist" className='text-gray-700 font-bold bg-gray-100 p-4 rounded-lg shadow-md block w-full'>
                Wishlist
              </Link>
            </li>
          </ul>
          
        </nav>

        <div className='w-3/4 p-8 bg-white shadow-lg rounded-lg ' >
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
