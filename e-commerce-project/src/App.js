import './App.css';
import React from 'react';
import SignInUp from './Components/SignInUp/SignInUp';
import StandardCard from './Components/ProductCards/StandardCard';
import MinCard from './Components/ProductCards/MinCard';
import products from './data/products';

function App() {

  const handleCardClick = (product) => {
    alert(`MaxCard: ${product.name}`);
  };
  // testing product cards

  const handleRemove = (id) => {
    alert(`Remove product with ID: ${id}`);
  };
  // Логика для удаления продукта из избранных или корзины

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

    </div>
  );
}

export default App;
