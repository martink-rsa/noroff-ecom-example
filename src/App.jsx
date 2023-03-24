import React, { useState } from 'react';
import ProductsList from './components/ProductsList';
import { useCart } from './hooks/useCart';

function App() {
  const { cart, products, clearCart } = useCart();
  const [myValue, setMyValue] = useState(false);

  function toggleValue() {
    setMyValue((prevState) => !prevState);
  }

  return (
    <div>
      <button onClick={toggleValue}>{myValue.toString()}</button>
      <div>
        <button onClick={clearCart}>CLEAR</button>
        Cart:{' '}
        <div>
          {cart.map((id, index) => {
            const product = products.find(
              (currentProduct) => currentProduct.id === id,
            );
            return (
              <div key={index}>
                {index} {product.title} - {product.price}
              </div>
            );
          })}
        </div>
      </div>
      <ProductsList />
    </div>
  );
}

export default App;
