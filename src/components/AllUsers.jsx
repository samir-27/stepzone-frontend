import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    const getUser = async () => {
        try {
            const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
            if (!token) {
                console.error('No token found');
                return;
            }

            const response = await fetch(`http://localhost:5000/api/v1/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            const data = await response.json();
            if (response.ok) {
                setUsers(data.data);
            } else {
                console.error('Error fetching users:', data.message);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`http://localhost:5000/api/v1/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                setUsers(users.filter((user) => user._id !== id));
            } else {
                alert(data.message || 'Failed to delete the product');
            }
        } catch (error) {
            console.error('Error while deleting:', error);
            alert('An error occurred while deleting the product');
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">All Users</h2>
            <div>
                {users.length === 0 ? (
                    <p className="text-gray-600">No users found.</p>
                ) : (
                    users.map((data) => (
                        <div
                            key={data._id}
                            className="bg-white border rounded-lg p-4 flex gap-5 items-center my-2"
                        >
                            <img
                                src={data.profile_img || '/default-avatar.png'}
                                alt={data.name}
                                className="w-24 h-24 object-cover rounded-full"
                            />
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold">{data.name}</h3>
                                <p className="text-gray-600">{data.email}</p>
                                <p className="text-gray-600">{data.phone}</p>
                                <p className="text-gray-600">{data.address}</p>
                            </div>
                            <div className="ml-auto flex items-center">
                                <button
                                    className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300 mx-2"
                                    onClick={() => handleDelete(data._id)}
                                >
                                    <MdDelete />
                                </button>

                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllUsers;
