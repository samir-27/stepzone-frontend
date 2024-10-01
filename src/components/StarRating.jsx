import React from 'react';

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                return (
                    <span key={index}>
                        {index < rating ? (
                            <i className="fas fa-star text-yellow-500"></i>
                        ) : (
                            <i className="far fa-star text-yellow-500"></i>
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
