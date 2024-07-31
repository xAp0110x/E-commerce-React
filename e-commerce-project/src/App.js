import './App.css';
import React, { useState } from 'react';
import SignInUp from './Components/SignInUp/SignInUp';
import StandardCard from './Components/ProductCards/StandardCard';
import MinCard from './Components/ProductCards/MinCard';
import MaxCard from './Components/ProductCards/MaxCard';
import products from './data/products';

function App() {

  const [selectedProduct, setSelectedProduct] = useState(null);

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
      {/* <SignInUp /> */}
      {/* component test */}


      <h1>Standard Cards Example</h1>
      {products.map((product) => (
        <StandardCard
          key={product.id}
          product={product}
          onClick={handleCardClick}
        />
      ))}
      {/* component test */}


      <h1>Min Cards Example</h1>
      {products.map(product => (
        <MinCard
          key={product.id}
          product={product}
          onClick={handleCardClick}
          onRemove={handleRemove}
        />
      ))}
      {/* component test */}

      {selectedProduct && (
        <MaxCard
          product={selectedProduct}
          onClose={handleCloseMaxCard}
        />
      )}
      {/* component test */}

    </div>
  );
}

export default App;
