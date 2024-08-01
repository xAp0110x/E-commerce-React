import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SignInUp from './Components/SignInUp/SignInUp';
import StandardCard from './Components/ProductCards/StandardCard';
import MinCard from './Components/ProductCards/MinCard';
import MaxCard from './Components/ProductCards/MaxCard';
import CartPanel from './Components/SlidingPanels/CartPanel';
import Carousel from './Components/Carousel/Carousel';
import products from './data/products';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseMaxCard = () => {
    setSelectedProduct(null);
  };

  const handleRemove = (id) => {
    setCartProducts(cartProducts.filter(product => product.id !== id));
  };

  const handleAddToCart = (product) => {
    setCartProducts([...cartProducts, product]);
    setIsCartOpen(true);
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <Navbar 
        onFavoritesClick={() => {}}
        onCartClick={handleCartClick} 
        onSignInUpClick={() => {}} 
      />
      <Carousel />
      <h1>Standard Cards Example</h1>
      {products.map((product) => (
        <StandardCard
          key={product.id}
          product={product}
          onClick={handleCardClick}
        />
      ))}
      <h1>Min Cards Example</h1>
      {products.map(product => (
        <MinCard
          key={product.id}
          product={product}
          onClick={handleCardClick}
          onRemove={handleRemove}
        />
      ))}
      {selectedProduct && (
        <MaxCard
          product={selectedProduct}
          onClose={handleCloseMaxCard}
          onAddToCart={handleAddToCart}
        />
      )}
      <CartPanel 
        isOpen={isCartOpen} 
        products={cartProducts} 
        onRemove={handleRemove}
        onClose={() => setIsCartOpen(false)}
        onClick={handleCardClick}
      />
      <Footer />
    </div>
  );
}

export default App;
