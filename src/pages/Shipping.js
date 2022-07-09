/** @format */

import React, { useState } from "react";
import style from "./shipping.module.css";
import {
  FaDhl,
  FaAlipay,
  FaAmazon,
  FaUber,
  FaChevronLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Shipping = () => {
  const [name, setName] = useState("company Name");

  return (
    <div className={style.container}>
      <h3>Shipping Details</h3>
      <div className={style.title}>
        Kindly select your favourite shipping company
      </div>
      <div className={`${style.Shipping__row} ${style.dhl}`}>
        <div className={style.input}>
          <input type="radio" name={name} />
          <label htmlFor={name}>DHL</label>
        </div>
        <div className={style.company__logo}>
          <FaDhl />
        </div>
      </div>
      <div className={`${style.Shipping__row} ${style.uber}`}>
        <div className={style.input}>
          <input type="radio" name={name} />
          <label htmlFor={name}>Uber cargoes</label>
        </div>
        <div className={style.company__logo}>
          <FaUber />
        </div>
      </div>
      <div className={`${style.Shipping__row} ${style.ali}`}>
        <div className={style.input}>
          <input type="radio" name={name} />
          <label htmlFor={name}>Ali Express</label>
        </div>
        <div className={style.company__logo}>
          <FaAlipay />
        </div>
      </div>
      <div className={`${style.Shipping__row} ${style.amazon}`}>
        <div className={style.input}>
          <input type="radio" name={name} />
          <label htmlFor={name}>Amazon Ways</label>
        </div>
        <div className={style.company__logo}>
          <FaAmazon />
        </div>
      </div>

      <div className={style.btn__container}>
        <Link to={"../info"}>
          <div>
            <span>
              <FaChevronLeft />
            </span>
            Go back to info
          </div>
        </Link>

        <Link to={"../payment"}>
          <div>
            <button type="submit">Go to Payments</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Shipping;
