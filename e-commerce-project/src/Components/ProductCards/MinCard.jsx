// src/Components/ProductCards/MinCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/MinCard.css';

const MinCard = ({ product, onClick, onRemove }) => {
    return (
        <div className="min-card" onClick={onClick}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <button className="remove-button" onClick={(e) => { e.stopPropagation(); onRemove(); }}>
                    ✕
                </button>
            </div>
        </div>
    );
};

MinCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default MinCard;
