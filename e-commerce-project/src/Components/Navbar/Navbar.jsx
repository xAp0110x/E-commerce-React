import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/Navbar.css';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import LogoIcon from '../../Assets/LogoIconBlack.png';

const Navbar = ({ onFavoritesClick, onCartClick, onSignInUpClick }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={LogoIcon} alt="TechnoMania Logo" className="logo-icon" />
                <span className="logo-text">TechnoMania</span>
            </div>
            <div className="navbar-links">
                <button>Home</button>
                <button>Catalog</button>
                <button>News</button>
                <button>About Us</button>
            </div>
            <div className="navbar-icons">
                <FaHeart onClick={onFavoritesClick} className="navbar-icon" />
                <FaShoppingCart onClick={onCartClick} className="navbar-icon" />
                <FaUser onClick={onSignInUpClick} className="navbar-icon" />
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    onFavoritesClick: PropTypes.func.isRequired,
    onCartClick: PropTypes.func.isRequired,
    onSignInUpClick: PropTypes.func.isRequired,
};

export default Navbar;
