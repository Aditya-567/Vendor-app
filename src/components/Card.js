// Card.js
import React from 'react';
import './Card.css';

const Card = ({ image, alt }) => {
    return (
        <div className="card">
            <img src={image} alt={alt} />
        </div>
    );
};

export default Card;
