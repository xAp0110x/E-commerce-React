import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';
import News from './Components/News/News';
import AboutUs from './Components/AboutUs/AboutUs';
import MaxCard from './Components/ProductCards/MaxCard';
import products from './data/products';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log(`Добавлено в корзину: ${product.name}`);
  };

  const handleCardClick = (product) => {
      setSelectedProduct(product);
  };

  const handleCloseMaxCard = () => {
      setSelectedProduct(null);
  };

  const handleOpenFavorites = () => {
      setIsFavoritesOpen(!isFavoritesOpen);
  };

  const handleOpenCart = () => {
      setIsCartOpen(!isCartOpen);
  };

  const handleOpenUser = () => {
      setIsUserOpen(!isUserOpen);
  };

  return (
      <Router>
          <div className="App">
              <Navbar 
                  onOpenFavorites={handleOpenFavorites} 
                  onOpenCart={handleOpenCart} 
                  onOpenUser={handleOpenUser} 
              />
              <Routes>
                  <Route path="/" element={<Home onCardClick={handleCardClick} />} />
                  {/* <Route path="/catalog" element={<Catalog onCardClick={handleCardClick} />} /> */}
                  <Route path="/news" element={<News />} />
                  <Route path="/about-us" element={<AboutUs />} />
              </Routes>

              {selectedProduct && (
                  <MaxCard
                      product={selectedProduct}
                      onClose={handleCloseMaxCard}
                      onAddToCart={handleAddToCart}
                  />
              )}
              <Footer />
          </div>
      </Router>
  );
}

export default App;