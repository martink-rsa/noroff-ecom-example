import React, { useEffect } from 'react';
import Product from '../Product';
import { API_URL } from '../../shared/urls';
import { useCart } from '../../hooks/useCart';

/**
 * Displays a list of products that the user can purchase
 * @example
 * const products = [{...}]; // Array of products
 * <ProductsList products={products} />
 */
function ProductsList() {
  const { products, fetchProducts, isLoading, hasErrors } = useCart();

  useEffect(() => {
    fetchProducts(API_URL);
  }, [fetchProducts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasErrors) {
    return <div>Oh no! There is an error. Please contact email@email.com.</div>;
  }

  return (
    <ul>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductsList;
