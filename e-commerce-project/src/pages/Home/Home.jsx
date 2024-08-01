import React, { useEffect } from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import StandardCard from '../../Components/ProductCards/StandardCard';
import News from '../../Components/News/News';
import AboutUs from '../../Components/AboutUs/AboutUs';
import products from '../../data/products';
import '../../Styles/Home.css';

const Home = ({ onCardClick, onAddToCart }) => {
    const smartphones = products.filter(product => product.category === 'Smartphones');
    const smartwatches = products.filter(product => product.category === 'Smartwatches');

    // Случайный выбор продуктов
    const getRandomProducts = (products, count) => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const randomSmartphones = getRandomProducts(smartphones, 6);
    const randomSmartWatches = getRandomProducts(smartwatches, 4);
    
    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка
    }, []);

    return (
        <div className="home">
            <Carousel />

            <h2>Smartphones</h2>
            <div className="product-preview">
                {randomSmartphones.map(product => (
                    <StandardCard
                        key={product.id}
                        product={product}
                        onClick={onCardClick}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>

            <News />

            <h2>Smart Watches</h2>
            <div className="product-preview">
                {randomSmartWatches.map(product => (
                    <StandardCard
                        key={product.id}
                        product={product}
                        onClick={onCardClick}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>

            <AboutUs />
        </div>
    );
};

export default Home;
