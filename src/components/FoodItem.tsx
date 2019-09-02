import React from "react";
import styled from 'styled-components';

function FoodItem({ category, item_name, price }:{category: string,item_name: string,price:string}) {
  const imageSrc = `/images/${category}.svg`
    //add css for component here
  const FoodWrapper = styled.div`
  .food-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    color: #333333;
    flex-direction: column;
    & > p {
      font-size: 1rem;
      margin-bottom: 0;
    }
    .image {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        border: 1px solid black;
        padding: 8px;
      }
  `
  return (
    <FoodWrapper>
        <div className="food-item">
        {imageSrc && <img alt={imageSrc} src={imageSrc} className="image" />}
        <h2>{item_name}</h2>
        <h3>£{price}</h3>
        </div>
    </FoodWrapper>
  );
}

export default FoodItem;
