import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');
    const colorMap = {
        White: 'bg-white',
        Gray: 'bg-gray-500',
        Blue: 'bg-blue-500',
        Orange: 'bg-orange-500',
        Red: 'bg-red-500',
        Pink: 'bg-pink-500',
        Yellow: 'bg-yellow-500',
        Green: 'bg-green-500',
        Purple: 'bg-purple-500',
    };
    const [form, setForm] = useState({
        name: '',
        brand: '',
        price: '',
        color: '',
        category: '',
        description: '',
        size: '',
    });

    const [selectedColors, setSelectedColors] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Fetch all products from API
    const getProduct = async () => {
        let response = await fetch(`http://localhost:5000/api/v1/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        response = await response.json();
        setProducts(response.data);
    };

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(
                `http://localhost:5000/api/v1/products/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                setProducts(products.filter((product) => product._id !== id));
            } else {
                alert(data.message || 'Failed to delete the product');
            }
        } catch (error) {
            console.error('Error while deleting:', error);
            alert('An error occurred while deleting the product');
        }
    };

    const handleSaveClick = async () => {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                console.error('No auth token found!');
                alert('Please log in again.');
                return;
            }
    
            const formData = new FormData();
            formData.append('name', form.name);
            formData.append('brand', form.brand);
            formData.append('color', selectedColors.join(','));
            formData.append('price', form.price);
            formData.append('description', form.description);
            formData.append('category', form.category);
    
            const response = await fetch(
                `http://localhost:5000/api/v1/products/${selectedProduct._id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                    body: formData,
                }
            );
    
            if (response.ok) {
                const updatedProduct = await response.json();
                setProducts((prevProducts) =>
                    prevProducts.map((product) =>
                        product._id === updatedProduct._id ? updatedProduct : product
                    )
                );
                setMessage('Product updated successfully');
                closeEditModal();
            } else {
                const errorData = await response.json();
                console.error('Error Data:', errorData);
                setMessage(errorData.message || 'Failed to update product');
            }
        } catch (error) {
            console.error('Error updating product:', error);
            setMessage('Error updating product');
        }
    };
    
    useEffect(() => {
        getProduct();
    }, []);

    const openEditModal = (product) => {
        setSelectedProduct(product);
        setForm({
            name: product.name || '',
            brand: product.brand || '',
            price: product.price || '',
            description: product.description || '',
            category: product.category || '',
            size: product.size || '',
        });
        setSelectedColors(product.color ? product.color.split(',') : []);
        setIsModalOpen(true);
    };

    const closeEditModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        closeEditModal();
    };

    const handleColorChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedColors([...selectedColors, value]);
        } else {
            setSelectedColors(selectedColors.filter((color) => color !== value));
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">All Products</h2>
            {products.map((data, key) => (
                <div key={key} className="flex items-center justify-between border-b py-4">
                    <div className="flex items-center">
                        <img
                            src={data.image}
                            alt={data.name}
                            className="w-24 h-24 object-cover mr-4 rounded-md shadow-sm"
                        />
                        <h3 className="text-lg font-semibold">{data.name}</h3>
                    </div>
                    <div>
                        <button
                            className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300 mx-2"
                            onClick={() => handleDelete(data._id)}
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
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-auto overflow-y-auto max-h-screen p-4">
                        <h3 className="text-xl font-bold mb-2">Edit Product</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="mb-2">
                                    <label className="block text-gray-700 font-bold text-sm">Title</label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 font-bold text-sm">Price</label>
                                    <input
                                        type="number"
                                        value={form.price}
                                        onChange={handleInputChange}
                                        name="price"
                                        className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 font-bold text-sm">Description</label>
                                    <textarea
                                        rows={2}
                                        value={form.description}
                                        onChange={handleInputChange}
                                        name="description"
                                        className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter product description"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 font-bold text-sm">Brand Name</label>
                                    <input
                                        type="text"
                                        value={form.brand}
                                        onChange={handleInputChange}
                                        name="brand"
                                        className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter brand name"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 font-bold text-sm">Category</label>
                                    <input
                                        type="text"
                                        value={form.category}
                                        onChange={handleInputChange}
                                        name="category"
                                        className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Enter category"
                                    />
                                </div>
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700 font-bold text-sm">Select Colors</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {Object.keys(colorMap).map((color) => (
                                        <label key={color} className="flex items-center text-sm">
                                            <input
                                                type="checkbox"
                                                value={color}
                                                checked={selectedColors.includes(color)}
                                                onChange={handleColorChange}
                                                className="mr-1"
                                            />
                                            <span className="flex items-center gap-1">
                                                <span className={`w-4 h-4 ${colorMap[color]}`}></span> {color}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white px-3 py-1 rounded-lg text-sm mr-2"
                                    onClick={closeEditModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
                                    onClick={handleSaveClick}
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