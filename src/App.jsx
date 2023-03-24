import React from 'react';
import ProductsList from './components/ProductsList';
import { useCart } from './hooks/useCart';

/*
1. Loop through items in cart
2. Find product that has matching id
3. Display product

*/

function App() {
  const { cart, products, clearCart } = useCart();
  return (
    <div>
      <div>
        <button onClick={clearCart}>CLEAR</button>
        Cart:{' '}
        <div>
          {cart.map((id) => {
            const product = products.find(
              (currentProduct) => currentProduct.id === id,
            );
            return (
              <div>
                {product.title} - {product.price}
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
