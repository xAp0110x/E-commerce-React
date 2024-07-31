import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/MinCard.css';

const MinCard = ({ product, onClick, onRemove }) => {
    return (
        <div className="min-card" onClick={() => onClick(product)}>
            <img src={product.image} 
            alt={product.name} 
            className="product-image" />
            
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <button className="remove-button" onClick={(e) => { e.stopPropagation(); onRemove(product.id); }}>
                    ✕
                </button>
            </div>
        </div>
    );
};

MinCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default MinCard;
