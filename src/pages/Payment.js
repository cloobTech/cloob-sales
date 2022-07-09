/** @format */

import React, { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useProductContext } from "../global/hooks";
import CurrencyFormat from "react-currency-format";
import style from "./payment.module.css";
import { useNavigate } from "react-router-dom";
import { ACTION } from "../global/reducer";
import { db, doc, setDoc } from "../firebase/utils";

const Payment = () => {
  const { productState, setRender, render, dispatch } = useProductContext();
  const { basket } = productState;
  const [subTotal, setSubTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const navigate = useNavigate();

  const [ren, setRen] = useState(true);

  //reducer to get subTotal
  const getSubtotalItemsPurchased = async () => {
    let itemsInCart = basket.reduce(
      (prev, { price, qty }) => prev + price * qty,
      0
    );

    setSubTotal(itemsInCart);
    setRender(!render);
  };

  //get total quantity
  const getTotalQty = () => {
    let qty = basket.reduce((prev, { qty }) => prev + qty, 0);
    return setTotalQty(qty);
  };

  // get shipping cost
  const handleShippingCost = () => {
    setShippingCost((3.25 / 100) * subTotal);
    setRen(!ren);
  };

  const handleTotalAmount = () => {
    setTotalCost(shippingCost + subTotal);
  };

  const paymentConfig = {
    reference: new Date().getTime().toString(),
    email: "tester@example.com",
    amount: totalCost * 100,
    publicKey: "pk_test_fcf4399b0b57fc6a4f5c4bd6d9383bc15ab0d9fa",
  };

  const onSuccess = async (ref) => {
    console.log(ref);
    const docRef = doc(db, "order", paymentConfig.reference);

    await setDoc(docRef, ...basket)
      .then(() => {
        dispatch({ type: ACTION.RESET_BASKET });
      })
      .catch((err) => console.log(err));
    navigate("../thankyou");
  };

  // const onClose = () => {
  //   console.log("Closed");
  //   alert("closed");
  // };

  // const paystackApi = usePaystackPayment(paymentConfig);

  useEffect(() => {
    handleShippingCost();
  }, [render]);

  useEffect(() => {
    getSubtotalItemsPurchased();
    getTotalQty();
  }, []);

  useEffect(() => {
    handleTotalAmount();
  }, [ren]);

  return (
    <div className={style.payment__card}>
      <h3>PAYSTACK PAYMENT</h3>
      <div className={style.sub__total}>
        <strong>
          Sub total <span>{` (${totalQty} items)`}</span>
        </strong>
        <strong>
          {
            <CurrencyFormat
              value={subTotal}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={2}
              prefix={"NGN "}
            />
          }
        </strong>
      </div>
      <div className={style.shipping__cost}>
        <strong>Shipping</strong>
        <strong>
          {
            <CurrencyFormat
              value={shippingCost}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={2}
              prefix={"NGN "}
            />
          }
        </strong>
      </div>
      <hr />
      <div className={style.total}>
        <div>Total</div>
        <div>
          {
            <CurrencyFormat
              value={totalCost}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={2}
              prefix={"NGN "}
            />
          }
        </div>
      </div>

      <div className={style.paystack__btn}>
        {/* <button onClick={() => paystackApi(onSuccess, onClose)}>Pay Now</button> */}
        <button onClick={onSuccess}>Pay Now</button>
      </div>
    </div>
  );
};

export default Payment;
