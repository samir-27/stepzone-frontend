import React, { useState } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import allProducts from '../utils/allproduct';

const AllProducts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openEditModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeEditModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        closeEditModal();
    };

    const [image, setImage] = useState(null);
    const [subImages, setSubImages] = useState([null, null, null]);
    const [selectedColors, setSelectedColors] = useState([]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
    };

    const handleColorChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedColors([...selectedColors, value]);
        } else {
            setSelectedColors(selectedColors.filter((color) => color !== value));
        }
    };

    const handleSubImageUpload = (index) => (e) => {
        const file = e.target.files[0];
        const newSubImages = [...subImages];
        newSubImages[index] = URL.createObjectURL(file);
        setSubImages(newSubImages);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">All Products</h2>
            {allProducts.map((data, key) => (
                <div key={key} className='flex items-center justify-between border-b py-4'>
                    <div className='flex items-center'>
                        <img
                            src={data.path}
                            alt={data.title}
                            className="w-24 h-24 object-cover mr-4 rounded-md shadow-sm"
                        />
                        <h3 className="text-lg font-semibold">{data.title}</h3>
                    </div>
                    <div>
                        <button
                            className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300 mx-2"
                        >
                            <MdDelete />
                        </button>
                        <button
                            className="bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-600 transition duration-300 mx-2"
                            onClick={() => openEditModal(data)}
                        >
                            <MdEdit />
                        </button>
                    </div>
                </div>
            ))}

            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto overflow-y-auto max-h-screen p-8">
                        <h3 className="text-xl font-bold mb-4">Edit Product</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="mb-0">
                                    <label className="block text-gray-700 font-bold mb-2">Title</label>
                                    <input
                                        type="text"
                                        defaultValue={selectedProduct.title}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-0">
                                    <label className="block text-gray-700 font-bold mb-2">Price</label>
                                    <input
                                        type="number"
                                        defaultValue={selectedProduct.price}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-0">
                                    <label className="block text-gray-700 font-bold mb-2">Description</label>
                                    <textarea
                                        rows={3}
                                        value={selectedProduct.desc}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter product description"
                                    />
                                </div>
                                <div className="mb-0">
                                    <label className="block text-gray-700 font-bold mb-2">Brand Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter brand name"
                                        value={selectedProduct.brand}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2">Category</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter category"
                                        value={selectedProduct.category}
                                    />
                                </div>
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Select Colors</label>
                                <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                                    {['White', 'Gray', 'Blue', 'Brown', 'Red', 'Pink', 'Yellow', 'Green', 'Purple'].map((color) => (
                                        <label key={color} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                value={color}
                                                onChange={handleColorChange}
                                                className="mr-2"
                                            />
                                            <span className={`flex items-center gap-2`}>
                                                <span className={`w-4 h-4 bg-${color.toLowerCase()}-500`}></span> {color}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Upload Main Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="w-full px-3 py-2 border rounded-lg"
                                />
                                {image && <img src={image} alt="Main" className="w-32 h-32 mt-4 object-cover rounded-md" />}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Upload Sub Images</label>
                                {[0, 1, 2].map((index) => (
                                    <div key={index} className="mb-4">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleSubImageUpload(index)}
                                            className="w-full px-3 py-2 border rounded-lg"
                                        />
                                        {subImages[index] && <img src={subImages[index]} alt={`Sub ${index + 1}`} className="w-32 h-32 mt-4 object-cover rounded-md" />}
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white p-2 rounded-lg mr-2"
                                    onClick={closeEditModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white p-2 rounded-lg"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllProducts;
