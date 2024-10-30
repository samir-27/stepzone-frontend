import React, { useState } from 'react';

const StarRatingInput = ({ rating, setRating }) => {
    const handleStarClick = (index) => {
        setRating(index + 1); // Set the rating (1 to 5 based on index)
    };

    return (
        <div className="star-rating-input">
            {[...Array(5)].map((star, index) => (
                <span key={index} onClick={() => handleStarClick(index)}>
                    {index < rating ? (
                        <i className="fas fa-star text-yellow-500 cursor-pointer"></i>
                    ) : (
                        <i className="far fa-star text-yellow-500 cursor-pointer"></i>
                    )}
                </span>
            ))}
        </div>
    );
};

export default StarRatingInput;
