/** @format */

import React, { useEffect, useState } from "react";
import style from "./cartPage.module.css";
import { useProductContext } from "../global/hooks";
import { BsPlus, BsDash, BsTrash } from "react-icons/bs";
import CurrencyFormat from "react-currency-format";
import { ACTION } from "../global/reducer";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { productState, setRender, render, dispatch } = useProductContext();
  const { basket } = productState;
  const [subTotal, setSubTotal] = useState(0);

  //reducer to get subTotal
  const getTotalItemsPurchased = () => {
    let itemsInCart = basket.reduce(
      (prev, { price, qty }) => prev + price * qty,
      0
    );
    setSubTotal(itemsInCart);
  };

  //increase qty of items from the cart page
  const handleIncreaseItem = (id) => {
    basket.map((product) => {
      if (product.id === id) {
        product.qty++;
        setRender(!render);
      }
    });
  };

  //Decrease qty of items from the cart page
  const handleDecreaseItem = (id) => {
    basket.map((product) => {
      if (product.id === id && product.qty > 1) {
        product.qty--;
        setRender(!render);
      }
    });
  };

  //Delete Item from cart
  const handleDeleteItem = (id) => {
    basket.map((product) => {
      if (product.id === id) {
        product.qty = 1;
      }
    });

    setRender(!render);
    dispatch({
      type: ACTION.REMOVE_ITEMS,
      id: id,
    });
  };

  useEffect(() => {
    getTotalItemsPurchased();
  }, [render]);

  return (
    <div className={style.cart__page}>
      <div className={style.container}>
        <h3> My Cart</h3>
        {basket.length ? (
          <div className={style.cart__card}>
            {basket.map(
              ({ title, price, qty, id, rating, url, collection }) => (
                <div className={style.cart__row} key={id}>
                  <div className={style.product__image}>
                    <img src={url} alt={title} />
                  </div>
                  <div className={style.product__details}>
                    <strong className={style.title}>
                      {title} <br /> <span>{`${collection} collection`}</span>{" "}
                    </strong>
                    {/* <p className={style.rating}>
                      {Array(rating)
                        .fill()
                        .map((star, index) => (
                          <span key={index}>⭐</span>
                        ))}
                    </p> */}
                    <div className={style.number__of__item}>
                      <button
                        className={`${style.decrease__btn} ${style.num__btn}`}
                        onClick={() => handleDecreaseItem(id)}
                      >
                        <BsDash />
                      </button>
                      <strong className={style.num}>{qty}</strong>
                      <button
                        className={`${style.increase__btn} ${style.num__btn}`}
                        onClick={() => handleIncreaseItem(id)}
                      >
                        <BsPlus />
                      </button>
                    </div>
                  </div>
                  <div className={style.price__container}>
                    <div
                      className={style.delete__item}
                      onClick={() => handleDeleteItem(id)}
                    >
                      <BsTrash />
                    </div>
                    <strong className={style.price}>
                      {
                        <CurrencyFormat
                          value={price * qty}
                          displayType={"text"}
                          thousandSeparator={true}
                          decimalScale={2}
                          prefix={"N"}
                        />
                      }
                    </strong>
                  </div>
                </div>
              )
            )}
            <hr />
            <div className={style.sub__total}>
              <strong>Sub Total</strong>
              <strong className={style.reduced__subtotal}>
                {
                  <CurrencyFormat
                    value={subTotal}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    prefix={"N"}
                  />
                }
              </strong>
            </div>

            <Link to={"../info"}>
              <div className={style.btn}>
                <button>Next</button>
              </div>
            </Link>
          </div>
        ) : (
          <>
            <h2 className={style.no__item__selected}>
              KINDLY ADD AN ITEM TO YOUR CART...
            </h2>
            <Link to={"/"}>
              <div className={`${style.btn} ${style.return__btn}`}>
                <button>Return Home</button>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
