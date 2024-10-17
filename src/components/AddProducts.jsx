import React, { useState } from 'react';

const AddProducts = () => {
    const [image, setImage] = useState(null);
    const [subImages, setSubImages] = useState([null, null, null]);
    const [subImagePreviews, setSubImagePreviews] = useState([null, null, null]);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSizes, setSelectedSizes] = useState([]); // Changed to an array
    const [imageFile, setImageFile] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        setImage(URL.createObjectURL(file));
    };

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    const handleSizeChange = (e) => {
        const size = e.target.value;
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter(s => s !== size)); // Remove size if already selected
        } else {
            setSelectedSizes([...selectedSizes, size]); // Add size if not selected
        }
    };

    const handleSubImageUpload = (index) => (e) => {
        const file = e.target.files[0];
        const newSubImages = [...subImages];
        const newSubImagePreviews = [...subImagePreviews];

        newSubImages[index] = file;
        newSubImagePreviews[index] = URL.createObjectURL(file);

        setSubImages(newSubImages);
        setSubImagePreviews(newSubImagePreviews);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("brand", brand);
        formData.append("category", category);
        
        if (imageFile) {
            formData.append("image", imageFile);
        }

        subImages.forEach((subImage, index) => {
            if (subImage) {
                formData.append(`subimage${index + 1}`, subImage);
            }
        });

        formData.append('color', selectedColor);
        selectedSizes.forEach((size) => {
            formData.append('size', size); // Append each selected size
        });

        try {
            const token = localStorage.getItem("authToken");
            const response = await fetch("http://localhost:5000/api/v1/addproduct", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                body: formData,
            });

            const responseText = await response.text();
            if (response.ok) {
                const data = JSON.parse(responseText);
                alert(data.success ? "Product added successfully" : "Error: " + data.message);
            } else {
                alert("Failed to add product: " + responseText);
            }
        } catch (error) {
            console.error("Error adding product:", error);
            alert("An error occurred while adding the product. Please try again.");
        }
    };
    
    
    return (
        <div className="mx-auto  bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>
            <form onSubmit={handleSubmit}>

                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                        Product Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(e) => setDescription(e.target.value)}
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
                        onChange={(e) => setPrice(e.target.value)}
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
                        onChange={(e) => setBrand(e.target.value)}
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
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter category"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="colors">
                        Select Color:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        {['white', 'gray', 'blue', 'brown', 'red', 'pink', 'yellow', 'green', 'purple'].map((color) => (
                            <label key={color} className="flex items-center">
                                <input
                                    type="radio"
                                    name="color"
                                    value={color}
                                    checked={selectedColor === color}
                                    onChange={handleColorChange}
                                    className="mr-2"
                                />
                                <span className="flex items-center gap-2">
                                    <span className={`w-4 h-4 bg-${color.toLowerCase()}-500 border-2 border-gray-400`}></span> {color}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="size">
                        Select Sizes:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        {['XS', 'S', 'M', 'L', 'XL', '2XL'].map((size) => (
                            <label key={size} className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="size"
                                    value={size}
                                    checked={selectedSizes.includes(size)} // Check if size is selected
                                    onChange={handleSizeChange}
                                    className="mr-2"
                                />
                                <span>{size}</span>
                            </label>
                        ))}
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
                            {subImagePreviews[index] && (
                                <div className="mt-2">
                                    <img src={subImagePreviews[index]} alt={`Sub Uploaded ${index + 1}`} className="w-32 h-32 object-cover rounded-md" />
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