// Home.js
import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import Card from './Card';
import './Home.css';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';

const images = [img1, img2, img3, img4, img5, img6];

const Home = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState('down');
    const [isTransitioning, setIsTransitioning] = useState(false); // New state to track transition

    const handleClick = (direction) => {
        if (isTransitioning) return; // Prevent new click if transition is in progress
        setIsTransitioning(true); // Set transitioning to true
        setDirection(direction);
        setIndex((prevIndex) => {
            if (direction === 'down') {
                return (prevIndex + 2) % images.length;
            } else {
                return (prevIndex - 1 + images.length) % images.length;
            }
        });
    };

    const springPropsLeft = useSpring({
        from: { transform: direction === 'down' ? 'translateX(-100%)' : 'translateX(0%)' },
        to: { transform: direction === 'down' ? 'translateX(0%)' : 'translateX(-100%)' },
        reset: true,
        reverse: index % images.length === 0,
        config: { duration: 3000 }, // Slowing down the animation period
        onRest: () => setIsTransitioning(false), // Set transitioning to false when animation completes
    });

    const springPropsRight = useSpring({
        from: { transform: direction === 'down' ? 'translateX(100%)' : 'translateX(0%)' },
        to: { transform: direction === 'down' ? 'translateX(0%)' : 'translateX(100%)' },
        reset: true,
        reverse: index % images.length === 0,
        config: { duration: 3000 }, // Slowing down the animation period
        onRest: () => setIsTransitioning(false), // Set transitioning to false when animation completes
    });

    return (
        <div className="home">
            <animated.div style={springPropsLeft} className="card-container left">
                <Card image={images[index % images.length]} alt="Left Image" />
            </animated.div>
            <div className="text-container" >
                <h1>Striking, Sleek and Stylish</h1>
                <h2>VELVET PRINTS</h2>
                <button onClick={() => handleClick('down')}>Explore Collection</button>
            </div>
            <animated.div style={springPropsRight} className="card-container right">
                <Card image={images[(index + 1) % images.length]} alt="Right Image" />
            </animated.div>
        </div>
    );
};

export default Home;

