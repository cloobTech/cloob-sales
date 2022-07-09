/** @format */

import React from "react";
import { Link } from "react-router-dom";
import style from "./thankyou.module.css";

const ThankYou = () => {
  return (
    <div className={style.thankyou}>
      <h1>THANK YOU!!!</h1>
      <div>Thank You for shopping on Cloob Sales</div>
      <p>See you soonest...</p>
      <Link to="/">
        <div className={style.btn}>
          <button>Return to home page</button>
        </div>
      </Link>
    </div>
  );
};

export default ThankYou;
