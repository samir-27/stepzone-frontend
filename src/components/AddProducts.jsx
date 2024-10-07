import React, { useState } from 'react';

const AddProducts = () => {
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
        <div className="mx-auto  bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>
            <form>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                        Product Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter product name"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="description">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows={4}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter product description"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="price">
                        Product Price:
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter product price"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="brand">
                        Brand Name:
                    </label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter brand name"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="category">
                        Category:
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter category"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="colors">
                        Select Colors:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="color"
                                value="White"
                                onChange={handleColorChange}
                                className="mr-2"
                            />
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-white border-2 border-gray-400"></span> White
                            </span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="color"
                                value="Gray"
                                onChange={handleColorChange}
                                className="mr-2"
                            />
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-gray-500"></span> Gray
                            </span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="color"
                                value="Blue"
                                onChange={handleColorChange}
                                className="mr-2"
                            />
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-blue-500"></span> Blue
                            </span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="color"
                                value="Brown"
                                onChange={handleColorChange}
                                className="mr-2"
                            />
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-yellow-700"></span> Brown
                            </span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="color"
                                value="Red"
                                onChange={handleColorChange}
                                className="mr-2"
                            />
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-red-500"></span> Red
                            </span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="color"
                                value="Pink"
                                onChange={handleColorChange}
                                className="mr-2"
                            />
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-pink-500"></span> Pink
                            </span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="color"
                                value="Yellow"
                                onChange={handleColorChange}
                                className="mr-2"
                            />
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-yellow-500"></span> Yellow
                            </span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="color"
                                value="Green"
                                onChange={handleColorChange}
                                className="mr-2"
                            />
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-green-500"></span> Green
                            </span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="color"
                                value="Purple"
                                onChange={handleColorChange}
                                className="mr-2"
                            />
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-purple-500"></span> Purple
                            </span>
                        </label>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="image">
                        Upload Main Image:
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {image && (
                        <div className="mt-4">
                            <img src={image} alt="Uploaded" className="w-32 h-32 object-cover rounded-md" />
                        </div>
                    )}
                </div>      
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2">Upload Sub Images:</label>
                    {[0, 1, 2].map((index) => (
                        <div key={index} className="mb-4">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleSubImageUpload(index)}
                                className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {subImages[index] && (
                                <div className="mt-2">
                                    <img src={subImages[index]} alt={`Sub Uploaded ${index + 1}`} className="w-32 h-32 object-cover rounded-md" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex ">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg font-bold hover:bg-blue-600 transition duration-300"
                    >
                        Add Product
                    </button>
                    <button
                        type="reset"
                        className="bg-gray-500 text-white py-2 px-6 rounded-lg font-bold hover:bg-gray-600 transition duration-300 ml-4"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;
