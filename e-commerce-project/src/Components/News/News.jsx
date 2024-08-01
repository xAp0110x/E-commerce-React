import React, { useEffect } from 'react';
import '../../Styles/News.css';

const News = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="news">
            <h2>Latest News</h2>
            <ul>
                <li>
                    <h3>New Product Launch</h3>
                    <p>We are excited to announce the launch of our latest product line.</p>
                </li>
                <li>
                    <h3>Seasonal Sale</h3>
                    <p>Don't miss our seasonal sale with discounts up to 50% off!</p>
                </li>
                <li>
                    <h3>Tech Conference 2024</h3>
                    <p>Join us at the upcoming Tech Conference to learn about the latest innovations.</p>
                </li>
            </ul>
        </div>
    );
};

export default News;
