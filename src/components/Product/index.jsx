import React from 'react';
import * as S from './index.styled';
import { useCart } from '../../hooks/useCart';

// Title
// Description
// Rating
// Price
// Discounted price
// Image

// Todos: Change div to li

/**
 * Displays a single product with that has its details
 * and a button to add to cart
 */
function Product({
  product: { id, title, description, imageUrl, price, discountedPrice },
}) {
  const { addToCart } = useCart();
  function onAddToCartButtonClick() {
    addToCart(id);
  }

  return (
    <S.ProductWrapper>
      <S.ProductHeading>{title}</S.ProductHeading>
      <S.ProductImageContainer>
        <S.ProductImage src={imageUrl} />
      </S.ProductImageContainer>
      <S.ProductDescriptionContainer>
        {description}
      </S.ProductDescriptionContainer>
      <S.RatingStarsContainer>****</S.RatingStarsContainer>
      <S.PricesContainer>
        <S.Price isValid={price === discountedPrice}>{price}</S.Price>
        <div>{discountedPrice < price && discountedPrice}</div>
      </S.PricesContainer>
      <S.AddToCartButton onClick={onAddToCartButtonClick}>
        ADD TO CART
      </S.AddToCartButton>
    </S.ProductWrapper>
  );
}

export default Product;
