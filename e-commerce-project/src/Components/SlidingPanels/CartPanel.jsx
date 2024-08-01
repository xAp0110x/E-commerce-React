import React from 'react';
import PropTypes from 'prop-types';
import MinCard from '../ProductCards/MinCard';
import '../../Styles/CartPanel.css';

const CartPanel = ({ isOpen, products, onRemove, onClose, onClick }) => {
    return (
        <div className={`cart-panel ${isOpen ? 'open' : ''}`}>
            <div className="cart-panel-content">
                <button className="close-button" onClick={onClose}>Close</button>
                <h2>Cart</h2>
                {products.length > 0 ? (
                    products.map(product => (
                        <MinCard
                            key={product.id}
                            product={product}
                            onRemove={() => onRemove(product.id)}
                            onClick={() => onClick(product)}
                        />
                    ))
                ) : (
                    <p>No products in the cart.</p>
                )}
            </div>
        </div>
    );
};

CartPanel.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            fullName: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            manufacturer: PropTypes.string.isRequired,
            model: PropTypes.string.isRequired,
            details: PropTypes.string.isRequired,
        })
    ).isRequired,
    onRemove: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default CartPanel;
