import React, { useState } from 'react';
import img from '../assets/login.webp';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
    const [errors, setErrors] = useState([]);  // State for validation errors
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);  // Clear previous errors

        const response = await fetch("http://localhost:5000/api/v1/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        const data = await response.json();

        if (data.success) {
            toast.success('Registration successful! Redirecting to login...', {
                position: "top-center",
                autoClose: 2000, 
            });

            setTimeout(() => {
                navigate('/login');
            }, 2000); 
        } else if (data.errors) {
            setErrors(data.errors);  // Display validation errors
        }
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div className='relative w-screen h-screen'>
                <div className='absolute w-full h-full bg-black opacity-60'></div>
                <img src={img} alt="" className='h-full w-full object-cover' />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg w-96 mx-5">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                value={credentials.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                value={credentials.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                name='password'
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                value={credentials.password}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Display validation errors */}
                        {errors.length > 0 && (
                            <ul className="text-red-500 mb-4">
                                {errors.map((error, index) => (
                                    <li key={index}>{error.msg}</li> 
                                ))}
                            </ul>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-sky-900 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Register
                        </button>
                        <p className='text-sm text-gray-700 font-semibold py-3'>
                            Already Have Account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                        </p>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Register;
