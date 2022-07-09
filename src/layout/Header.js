/** @format */

import React, { useState, useEffect } from "react";
import style from "./header.module.css";
import hero__image from "../assets/hero-image2.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import Blend from "../components/Blend";
import { useProductContext } from "../global/hooks";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ACTION } from "../global/reducer";

export const Navbar = () => {
  const { productState, render, dispatch } = useProductContext();
  const { basket } = productState;
  const navigate = useNavigate();

  const [prevScrollY, setPrevScrollY] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [totalItemInCart, setTotalItemInCart] = useState(0);

  //handle navbar & hamburger menu (show/hide) based on scroll...
  // const handleNavbarScroll = () => {
  // //   window.addEventListener("scroll", () => {
  // //     if (prevScrollY < window.scrollY) {
  // //       setShowNav(true);
  // //     } else {
  // //       setShowNav(null);
  // //     }
  // //     setPrevScrollY(window.scrollY);
  // //   });
  // // };

  const getTotalItemsPurchased = () => {
    let itemsInCart = basket.reduce((prev, { qty }) => prev + qty, 0);
    setTotalItemInCart(itemsInCart);
  };

  const signin = () => {
    dispatch({ type: ACTION.SET_LOGIN });

    navigate("../signin");
  };

  useEffect(() => {
    // handleNavbarScroll();
    getTotalItemsPurchased();

    return () => {};
  }, [prevScrollY, basket, totalItemInCart, render]);

  return (
    <div className={`${style.navbar} ${showNav && style.hide__nav}`}>
      <div className={style.navbar__logo}>
        <Link to={"/"}>C</Link>
      </div>
      <div className={style.navbar__search}>
        <input
          type="text"
          placeholder="e.g. shoes, bags, phones, books... etc"
        />
      </div>
      <div
        onClick={() => signin()}
        to={"../signin"}
        className={style.navbar__user}
      >
        <small className={style.navbar__user__full__screen}>sign in</small>
        <FaUserCircle />
      </div>
      <Link to={"checkout-process/cart"}>
        <div className={style.navbar__cart}>
          <FaShoppingCart />
          <span>{totalItemInCart}</span>
        </div>
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <div className={style.header}>
      {/* Hero Section */}
      <div className={style.hero}>
        <div className={style.hero__image}>
          <img src={hero__image} alt="" />
          <Blend />
        </div>

        <div className={style.hero__text}>
          <div>EVERYTHING</div>
          <div className={style.ample__style}>
            <div>
              MODERN <span>&</span>
            </div>
          </div>
          <div>TRENDING</div>
        </div>
      </div>

      {/* Floating Menu */}
      <div className={style.hamburger__menu}>
        <AiOutlineMenu />
      </div>
    </div>
  );
};

export default Header;
