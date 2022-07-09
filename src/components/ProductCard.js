/** @format */

import React from "react";
import CurrencyFormat from "react-currency-format";
import { useProductContext } from "../global/hooks";

const ProductCard = ({ rating, url, price, title, id, productStyle}) => {
  const { addItemsToBasket } = useProductContext();

  return (
    <div style={productStyle} className="product__card">
      <div className="product__card__image">
        <img src={url} alt={title} />
      </div>
      <div className="product__card__title">{title}</div>
      <div className="product__card__rating">
        {Array(rating)
          .fill()
          .map((star, index) => (
            <span key={index}>⭐</span>
          ))}
      </div>
      <div className="product__card__price">
        {
          <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            prefix={"N"}
          />
        }
      </div>
      <div className="product__card__btn">
        <button onClick={() => addItemsToBasket(id)}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
