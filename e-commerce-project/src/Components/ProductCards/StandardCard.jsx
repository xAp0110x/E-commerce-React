import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/StandardCard.css';

const StandardCard = ({ product, onClick }) => {
    return (
        <div className="standard-card" onClick={() => onClick(product)}>
            <img 
                src={product.image}
                alt={product.name} 
                className="product-image" 
            />
            
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}₼</p>
            </div>
        </div>
    );
};

StandardCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default StandardCard;