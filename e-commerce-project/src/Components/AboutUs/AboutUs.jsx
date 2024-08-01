import React, { useEffect } from 'react';
import '../../Styles/AboutUs.css';

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-us">
            <h2>About Us</h2>
            <p>
                Welcome to TechnoMania! We are dedicated to providing you with the best electronics and gadgets at unbeatable prices. Our team is passionate about technology and strives to bring you the latest innovations in the market.
            </p>
            <p>
                Our mission is to ensure customer satisfaction and build long-lasting relationships with our clients. Thank you for choosing us as your trusted electronics partner!
            </p>
        </div>
    );
};

export default AboutUs;
