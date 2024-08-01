import React from 'react';
import '../../Styles/Navbar.css';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import LogoIcon from '../../Assets/LogoIconBlack.png';
import { Link } from 'react-router-dom';


const Navbar = ({ onOpenFavorites, onOpenCart, onOpenUser }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={LogoIcon} alt="TechnoMania Logo" className="logo-icon" />
                <span className="logo-text">TechnoMania</span>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
            </ul>
            <div className="navbar-icons">
                <FaHeart onClick={onOpenFavorites} className="navbar-icon" />
                <FaShoppingCart onClick={onOpenCart} className="navbar-icon" />
                <FaUser onClick={onOpenUser} className="navbar-icon" />
            </div>
        </nav>
    );
};

export default Navbar;
