import React, { useState } from 'react';
import img from '../assets/login.webp';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('User');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Reset error state
        try {
            let url;
            if (role === 'Admin') {
                url = 'http://localhost:5000/api/v1/admin/login';
            } else {
                url = 'http://localhost:5000/api/v1/login';
            }
    
            const response = await axios.post(url, { email, password });
    
            // console.log("Login response:", response);
            // console.log("Response data:", response.data); 
                localStorage.setItem("userId",response.data.userId)
            // console.log("id stored",response.data.userId)
            // Correctly store the token
            if (response.data.authToken) {
                localStorage.setItem("authToken", response.data.authToken);
                console.log("Token stored:", response.data.authToken);
            } else {
                console.error("No token found in the response");
            }
    
            let userRole = role === 'Admin' ? response.data.admin.role.toLowerCase() : response.data.Role.toLowerCase();
    
            if (userRole) {
                localStorage.setItem('userRole', userRole);
                if (userRole === 'admin') {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            } else {
                throw new Error("Role is undefined in the response");
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            setError(errorMessage);
            console.error('Login failed:', errorMessage);
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
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-sky-900 text-white py-2 px-4 rounded-md hover:bg-blue-600"
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