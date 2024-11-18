import React, { useState } from 'react';
import './App.css';
import ProductDetail from './components/ProductDetail';
import productList from './productList';
import { CartProvider } from './context/CartContext';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProduct = productList[currentIndex];

  return (
    <CartProvider>
      <div className="App">
        <ProductDetail
          name={currentProduct.name}
          subName={currentProduct.subName}
          image={currentProduct.image}
          status={currentProduct.status}
          relatedImages={currentProduct.relatedImages}
          descriptionItems={currentProduct.descriptionItems}
          availableOfferItems={currentProduct.availableOfferItems}
          sizes={currentProduct.sizes}
          ingredients={currentProduct.ingredients}
          shipping={currentProduct.shipping}
          waranty={currentProduct.warranty}
          supportFirstParagraph={currentProduct.supportFirstParagraph}
          supportSecondParagraph={currentProduct.supportSecondParagraph}
          relatedProducts={currentProduct.relatedProducts}
          handlePreviousButton={handlePrevious}
          handleNextButton={handleNext}
        />
      </div>
    </CartProvider>
  );
}

export default App;
