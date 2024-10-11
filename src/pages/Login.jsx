import React, { useState } from 'react';
import img from '../assets/login.webp';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('User');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          let url;
          
          if (role === 'Admin') {
            url = 'http://localhost:5000/api/v1/admin/login';
            navigate("/admin")
          } else {
            url = 'http://localhost:5000/api/v1/login';
            navigate("/")
          }
    
          const response = await axios.post(url, { email, password });
          console.log('Login successful:', response.data);
          
        } catch (error) {
          console.error('Login failed:', error.response ? error.response.data.message : error.message);
        }
      };

    return (
        <div>
            <div className='relative w-screen h-screen'>
                <div className='absolute w-full h-full bg-black opacity-60'></div>
                <img src={img} alt="" className='h-full w-full object-cover' />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg w-96 mx-5">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="role" className="block text-gray-700">Login As</label>
                            <select
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                            >
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
                            Haven't Created Account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
