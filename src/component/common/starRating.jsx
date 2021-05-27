import React, { Component } from 'react';
// import  '../../../node_modules/font-awesome/css/font-awesome.css';
import { FaStar } from 'react-icons/fa';
const StarRating = (ratingValue) => {
    return(
    <div>
    {[...Array(5)].map((star, i) => {
        const rating = i + 1;
    return ( 
        <label className="starInput" key={ratingValue + i}>
            <input type="radio"
                    name="rating"
                    value={ratingValue}
                    />
            <FaStar
            className="star"
            color={ratingValue <= star ? "#e4e5e9" : "#ffc107"}
            size={17}
            />
        </label>
     );
    })}
    
        </div>
    );
}
 
export default StarRating;