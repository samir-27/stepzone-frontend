import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, increaseQuantity, decreaseQuantity } from '../redux/CartSlice';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();
    console.log("cart items:",cartItems); // Ensure that size is included in the cart items

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        pincode: '',
       
    });

    const userId = localStorage.getItem("userId");

    const handleRemove = (id) => {
        dispatch(removeItemFromCart(id));
    };

    const handleIncrease = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleOrderPlacement = async () => {
        const orderData = {
            user: userId,
            items: cartItems.map(item => ({
                product: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                size: item.size
            })),
            totalAmount,
            address: userDetails.address,
            pincode: userDetails.pincode,
        };
        console.log(orderData)
        try {
            const response = await fetch('http://localhost:5000/api/v1/order/place', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to place order');
            }

            alert('Order Placed Successfully!');
            toggleModal();
            // Clear cart (optional)
            cartItems.forEach(item => dispatch(removeItemFromCart(item.id)));
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className='py-24 container mx-auto xl:px-40 lg:px-28 md:px-10 px-5'>
            {cartItems.length === 0 ? (
                <p className="text-center text-lg">Your cart is empty.</p>
            ) : (
                <div className='bg-white drop-shadow-lg rounded-lg p-6'>
                    {cartItems.map(item => (
    <div key={item.id} className='flex items-center border-b py-4'>
        <img
            src={item.path}
            alt={item.name}
            className="w-24 h-24 object-cover mr-4 rounded-md shadow-sm"
        />
        <div className='flex-1'>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">Price: ${Number(item.price).toFixed(2)}</p>
            <p className="text-gray-600">Size: {item.size}</p> {/* Display the size */}
            <div className='flex items-center mt-2'>
                <button
                    onClick={() => handleDecrease(item.id)}
                    className="bg-gray-300 text-black p-2 rounded-lg hover:bg-gray-400 transition duration-300"
                >
                    -
                </button>
                <p className="mx-3 text-lg">{item.quantity}</p>
                <button
                    onClick={() => handleIncrease(item.id)}
                    className="bg-gray-300 text-black p-2 rounded-lg hover:bg-gray-400 transition duration-300"
                >
                    +
                </button>
            </div>
        </div>
        <button
            onClick={() => handleRemove(item.id)}
            className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
            Remove
        </button>
    </div>
))}

                    <div className="mt-6 flex justify-between items-center">
                        <h3 className="text-xl font-bold">Total Amount:</h3>
                        <p className="text-xl font-semibold">${totalAmount.toFixed(2)}</p>
                    </div>
                    <button
                        onClick={toggleModal}
                        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}


            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

                        <input
                            type="text"
                            name="name"
                            value={userDetails.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full p-2 border border-gray-300 rounded mb-3"
                        />
                        <input
                            type="text"
                            name="address"
                            value={userDetails.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="w-full p-2 border border-gray-300 rounded mb-3"
                        />
                        <input
                            type="email"
                            name="email"
                            value={userDetails.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-2 border border-gray-300 rounded mb-3"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={userDetails.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full p-2 border border-gray-300 rounded mb-3"
                        />
                        <input
                            type="text"
                            name="pincode"
                            value={userDetails.pincode}
                            onChange={handleChange}
                            placeholder="Pincode"
                            className="w-full p-2 border border-gray-300 rounded mb-3"
                        />

                        <div className="flex justify-end mt-4">
                            <button
                                onClick={toggleModal}
                                className="px-4 py-2 bg-gray-300 rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleOrderPlacement}
                                className="px-4 py-2 bg-green-500 text-white rounded"
                            >
                                Pay ${totalAmount.toFixed(2)}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
