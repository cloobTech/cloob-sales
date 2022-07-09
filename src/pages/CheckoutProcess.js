/** @format */

import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Outlet, NavLink } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import style from "./checkout-process.module.css";

const CheckoutProcess = () => {
  return (
    <ScrollToTop>
      <div className={style.container}>
        <h3>CHECKOUT PROCESS</h3>
        <div className={style.nav__container}>
          <NavLink
            to={"cart"}
            className={({ isActive }) =>
              isActive ? style.active : style.nav__link
            }
          >
            <button disabled>Cart</button>
          </NavLink>
          <BsChevronRight />

          <NavLink
            to={"info"}
            className={({ isActive }) =>
              isActive ? style.active : style.nav__link
            }
          >
            <button disabled>Information</button>
          </NavLink>
          <BsChevronRight />

          <NavLink
            to={"shipping"}
            className={({ isActive }) =>
              isActive ? style.active : style.nav__link
            }
          >
            <button disabled>Shipping</button>
          </NavLink>
          <BsChevronRight />

          <NavLink
            to={"payment"}
            className={({ isActive }) =>
              isActive ? style.active : style.nav__link
            }
          >
            <button disabled>Payment</button>
          </NavLink>
        </div>
        <Outlet />
      </div>
    </ScrollToTop>
  );
};

export default CheckoutProcess;
