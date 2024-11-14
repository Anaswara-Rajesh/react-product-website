import React from 'react';
import './App.css';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="font-sans">
      <ProductDetail
        name="Product 1"
        description=""
        price=""
        image="/assets/product1.svg"
      />
    </div>
  );
}

export default App;
