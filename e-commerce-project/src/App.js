import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';
import SignInUp from './Components/SignInUp/SignInUp';
import StandardCard from './Components/ProductCards/StandardCard';
import MinCard from './Components/ProductCards/MinCard';
import MaxCard from './Components/ProductCards/MaxCard';
import products from './data/products';

function App() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSignInUp, setShowSignInUp] = useState(false);

  const handleFavoritesClick = () => {
    alert('Open Favorites Panel');
  };

  const handleCartClick = () => {
    alert('Open Cart Panel');
  };

  const handleSignInUpClick = () => {
    setShowSignInUp(true);
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleRemove = (id) => {
    alert(`Remove product with ID: ${id}`);
  };

  const handleCloseMaxCard = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">

      <Navbar
        onFavoritesClick={handleFavoritesClick}
        onCartClick={handleCartClick}
        onSignInUpClick={handleSignInUpClick}
      />

      <Carousel />

      {/* {showSignInUp && <SignInUp />} */}

      {/* <h1>Standard Cards Example</h1>
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
        />
      )} */}

      <Footer />

    </div>
  );
}

export default App;
