import React from 'react'
import img from '../assets/login.webp'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <div className='relative w-screen h-screen'>
                <div className='absolute w-full h-full bg-black opacity-60'></div>
                <img src={img} alt="" className='h-full w-full object-cover' />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg w-96 mx-5">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
                    <form>
                    <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Name</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Register As</label>
                            <select className='w-full px-3 py-2 border border-gray-300 rounded-md'>
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-sky-900 text-white py-2 px-4 rounded-md hover:bg-rose-600"
                        >
                            Login
                        </button>
                        <p className='text-sm text-gray-700 font-semibold py-3'>
                            Already Have Account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register