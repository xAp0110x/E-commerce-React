import './App.css';
import React from 'react';
import SignInUp from './Components/SignInUp/SignInUp';
import StandardCard from './Components/ProductCards/StandardCard';
import products from './data/products';

function App() {

  // const handleCardClick = (product) => {
  //   alert(`Product clicked: ${product.name}`);
  // }; testing product cards

  return (
    <div className="App">
      {/* <SignInUp /> component test */}

      {/* {products.map((product) => (
        <StandardCard
          key={product.id}
          product={product}
          onClick={handleCardClick}
        />
      ))} component test */}


    </div>
  );
}

export default App;
