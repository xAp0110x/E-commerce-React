import React, { useEffect, useState } from 'react';
import '../../Styles/Carousel.css';
import Slide1 from '../../Assets/Slide1.jpg';
import Slide2 from '../../Assets/Slide2.jpg';
import Slide3 from '../../Assets/Slide3.png';

const slides = [
    { src: Slide1 },
    { src: Slide2 },
    { src: Slide3 }
];

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            {slides.map((slide, index) => (
                <div 
                    key={index} 
                    className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
                >
                    <img src={slide.src} alt={`Slide ${index + 1}`} />
                </div>
            ))}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-indicator ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
