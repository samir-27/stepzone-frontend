import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, increaseQuantity, decreaseQuantity } from '../redux/CartSlice';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItemFromCart(id));
    };

    const handleIncrease = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id));
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
                </div>
            )}
        </div>
    );
};

export default Cart;