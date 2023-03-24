import styled from 'styled-components';

export const ProductWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

export const ProductHeading = styled.h3``;

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ProductDescriptionContainer = styled.div``;

export const RatingStarsContainer = styled.div``;

export const PricesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div`
  color: ${(props) => (props.isValid ? 'initial' : 'red')};
  text-decoration: ${(props) => (props.isValid ? 'none' : 'line-through')};
`;

export const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: 0;
  font-weight: 800;
  cursor: pointer;
  :hover {
    background-color: #333;
  }
`;
