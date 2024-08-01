import React from 'react';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import '../../Styles/Navbar.css';
import LogoIcon from '../../Assets/LogoIconBlack.png';

const Navbar = ({ onFavoritesClick, onCartClick, onSignInUpClick }) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={LogoIcon} alt="TechnoMania_Logo" className="logo-icon" />
                <span className="site-name">TechnoMania</span>
            </div>
            <div className="navbar-center">
                <a href="#home">Home</a>
                <a href="#catalog">Catalog</a>
                <a href="#news">News</a>
                <a href="#about-us">About Us</a>
            </div>
            <div className="navbar-right">
                <FaHeart className="navbar-icon" onClick={onFavoritesClick} />
                <FaShoppingCart className="navbar-icon" onClick={onCartClick} />
                <FaUser className="navbar-icon" onClick={onSignInUpClick} />
            </div>
        </nav>
    );
};

export default Navbar;
