import React from 'react';
import users from '../utils/users';
import { MdDelete } from 'react-icons/md';

const AllUsers = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">All Users</h2>
            <div className="">
                {users.map((data, key) => (
                    <div key={key} className="bg-white border rounded-lg p-4 flex gap-5 items-center my-2">
                        <img
                            src={data.image}
                            alt={data.name}
                            className="w-24 h-24 object-cover rounded-full"
                        />
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold">{data.name}</h3>
                            <p className="text-gray-600">{data.email}</p>
                            <p className="text-gray-600">{data.phone}</p>
                            <p className="text-gray-600">{data.address}</p>
                        </div>
                        <div className='ml-auto flex items-center'>
                            <button
                                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300 mx-2"
                            >
                                <MdDelete />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllUsers;

