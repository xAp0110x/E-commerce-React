import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/MaxCard.css';
import { FaRegHeart, FaCartPlus } from 'react-icons/fa';

const MaxCard = ({ product, onClose, onAddToCart }) => {
    return (
        <div className="max-card-overlay" onClick={onClose}>
            <div className="max-card" onClick={(e) => e.stopPropagation()}>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                    <h2 className="product-title">{product.name}</h2>
                    <p><strong>Product category:</strong> {product.category}</p>
                    <p><strong>Product full name:</strong> {product.fullName}</p>
                    <p><strong>Manufacturer:</strong> {product.manufacturer}</p>
                    <p><strong>Model:</strong> {product.model}</p>
                    <p><strong>Specifications:</strong> {product.details}</p>
                    <div className="product-buttons">
                        <button className="button-heart"><FaRegHeart /></button>
                        <button className="button-cart" onClick={() => onAddToCart(product)}><FaCartPlus /></button>
                    </div>
                    <div className="product-price">
                        <strong>₼{product.price}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

MaxCard.propTypes = {
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
    onClose: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default MaxCard;
