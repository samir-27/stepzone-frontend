import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/CartSlice';
import StarRating from '../components/StarRating';
import StarRatingInput from '../components/StarRatingInput';
import axios from 'axios';

const Product = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [currentImage, setCurrentImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const getProduct = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/products');
            setProducts(response.data.data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            const foundProduct = products.find((o) => o._id === params.id);
            if (foundProduct) setProduct(foundProduct);
        }
    }, [params, products]);

    useEffect(() => {
        if (product?.image) {
            setCurrentImage(product.image);
        }
    }, [product]);

    const handleCartClick = () => {
        dispatch(addItemToCart({
            id: product._id,
            name: product.name,
            path: product.image,
            price: product.price,
        }));
        navigate("/cart");
    };

    const getReviews = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/products/${params.id}/reviews`);
            setReviews(response.data.data || []);
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
        }
    };
    console.log(reviews)

    const UserID = localStorage.getItem("userId");

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Clear previous errors

        try {
            await axios.post(`http://localhost:5000/api/v1/products/${params.id}/reviews`, {
                stars: rating,
                description: reviewText,
                userId: UserID  // Include userId
            });

            getReviews();
            toggleModal();
        } catch (error) {
            console.error("Failed to submit review:", error);

            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message); // Store backend error message
            } else {
                setErrorMessage("Something went wrong. Please try again.");
            }
        }
    };


    useEffect(() => {
        getReviews();
    }, [product]);

    return (
        <div className="mt-24 container mx-auto xl:px-40 lg:px-28 md:px-10 px-5">
            <div className="xl:flex lg:flex md:flex gap-6">
                <div className="flex gap-6 grid-cols-6 xl:w-3/5 lg:w-3/5 md:w-3/5 w-full justify-center">
                    <div className="flex flex-col justify-between">
                        {[product?.subimage1, product?.subimage2, product?.subimage3].map((subImage, idx) => (
                            <img
                                key={idx}
                                src={subImage}
                                alt={`product img ${idx + 1}`}
                                className="xl:w-36 xl:h-36 lg:h-32 lg:w-32 w-24 h-24 cursor-pointer shadow-lg object-cover"
                                onMouseEnter={() => setCurrentImage(subImage)}
                                onMouseOut={() => setCurrentImage(product?.image)}
                            />
                        ))}
                    </div>

                    <div className='border-2 bg-gray-200'>
                        <img
                            src={currentImage}
                            alt="product img big"
                            className="xl:h-128 xl:w-128 lg:h-112 lg:w-112 md:h-96 md:w-96 sm:h-96 sm:w-96 h-96 w-96 object-contain"
                        />
                    </div>
                </div>

                <div className='mt-6 xl:w-2/5 lg:w-2/5 md:w-2/5'>
                    <h2 className="text-lg font-semibold">Product Details</h2>
                    <h1 className='text-4xl font-bold py-2'>{product?.name}</h1>
                    <p>{product?.description}</p>
                    <br />
                    <h1 className='text-3xl font-semibold text-rose-500'>Price: {product?.price}$</h1>
                    <p className='text-gray-500 text-xl'>(Inclusive of all taxes)</p>
                    <h2 className='py-5 text-gray-800 text-xl'>Select Size</h2>
                    <div className='grid grid-cols-3 gap-2'>
                        {["XS", "S", "M", "L", "XL", "2XL"].map(size => (
                            <button key={size} className='p-2 border-2 border-gray-500 rounded-md hover:bg-gray-500 hover:text-white'>{size}</button>
                        ))}
                    </div>

                    <div className='grid grid-cols-2 gap-3'>
                        <button className='p-3 bg-sky-900 rounded-md text-white text-xl font-semibold mt-5 w-full hover:bg-rose-700' onClick={handleCartClick}>Add To Cart</button>
                        <button className='p-3 bg-gray-200 rounded-md text-gray-800 text-xl font-semibold mt-5 w-full hover:bg-rose-700 hover:text-white'>Add To Wishlist</button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-4xl py-4'>Reviews</h1>
                <button
                    onClick={toggleModal}
                    className='p-2 rounded-md bg-rose-500 text-white font-semibold my-2'
                >
                    Add Review
                </button>
                {reviews.length === 0 ? (
                    <p>No reviews available for this product.</p>
                ) : (
                    <div className="space-y-6">
                        {reviews.map((review) => (
                            <div
                                key={review._id}
                                className="flex items-start p-4 border-b bg-white shadow-lg rounded-lg border"
                            >
                                <img
                                    src={review.userId?.profile_img || 'https://via.placeholder.com/50'}
                                    alt="User profile"
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-lg">{review.userId?.name || 'Anonymous'}</h3>
                                            <StarRating rating={review.stars} />
                                        </div>
                                    </div>
                                    <p className="mt-2 text-gray-700">{review.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                            <h2 className="text-2xl font-semibold mb-4">Add a Review</h2>

                            {errorMessage && ( // Show error message if it exists
                                <div className="bg-red-100 text-red-600 p-2 rounded mb-4">
                                    {errorMessage}
                                </div>
                            )}

                            <StarRatingInput rating={rating} setRating={setRating} />
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded mt-4"
                                rows="5"
                                placeholder="Write your review here..."
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                            ></textarea>

                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={toggleModal}
                                    className="px-4 py-2 bg-gray-300 rounded mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleReviewSubmit}
                                    className="px-4 py-2 bg-rose-500 text-white rounded"
                                >
                                    Submit Review
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Product;
