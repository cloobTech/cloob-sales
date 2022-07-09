/** @format */

import React, { useEffect, useState, useRef } from "react";
import ProductCard from "../components/ProductCard";
import style from "./showcase.module.css";
import ScrollToTop from "../components/ScrollToTop";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Showcase = () => {
  const cheveron = useRef();

  const [pos, setPos] = useState(0);

  const onScroll = (e) => {
    if (pos > 5) {
      cheveron.current.classList.add(style.add);
    } else {
      cheveron.current.classList.remove(style.add);
    }
    console.log(pos)
    setPos(e.currentTarget.scrollLeft);
  };

  // useEffect(() => {

  // }, []);

  const [showcaseDetails, setShowcaseDetails] = useState([]);
  const [ren, setRen] = useState(true);
  const [itemTitle, setItemTitle] = useState([]);
  const [productCard, setProductCard] = useState([]);
  const [ren2, setRen2] = useState([]);
  const [active, setActive] = useState("");

  const getItemTitle = () => {
    //map though the showcase and return all the "values" of the title property in an array
    //we use the "Set" data type to remove duplicate
    //SetRen2 was to force a render after this func is called
    let itemTitle = showcaseDetails?.map((item) => item.title);
    itemTitle = new Set([...itemTitle]);
    setItemTitle([...itemTitle]);
    setRen2(!ren2);
  };

  const handleFilter = (title) => {
    let itemTitle = showcaseDetails?.filter((item) => item.title === title);
    setProductCard(itemTitle);
    setActive(title);
  };

  const handleDemo1 = () => {
    let itemTitles = showcaseDetails?.filter(
      (item) => item.title === itemTitle[0]
    );
    setProductCard(itemTitles);
    setActive(itemTitle[0]);
  };

  //UseEffects

  useEffect(() => {
    handleDemo1();
  }, [ren2]);

  useEffect(() => {
    getItemTitle();
  }, [ren]);

  useEffect(() => {
    //we simply get retrieve our data from the local storage
    //and store them in a state variable (showcase details)
    //we 'setRen(!ren) is just to --force a render
    let showcase = JSON.parse(localStorage.getItem("filteredArray"));
    setShowcaseDetails(showcase);
    setRen(!ren);
  }, []);

  return (
    <ScrollToTop>
      <div className={style.showcase}>
        <div
          className={style.showcase__img}
          style={{
            backgroundImage: `url(${
              productCard[0]?.url || showcaseDetails[0]?.url
            })`,
          }}
        >
          <div className={style.showcase__text}>
            <Link to="/">
              <FaArrowLeft />
            </Link>
            {showcaseDetails[0]?.collection}
          </div>
          <div className={style.showcase__blend}></div>
        </div>
      </div>
      <div className={style.grid__container}>
        <div className={style.link__container}>
          <div className={style.product__links} onScroll={onScroll}>
            {itemTitle.map((title) => (
              <NavLink
                onClick={() => handleFilter(title)}
                key={title}
                to="#"
                className={({ isActive }) =>
                  isActive && title ? style.active : undefined
                }
              >
                {title}
              </NavLink>
            ))}

            <div className={style.cheveron__right} ref={cheveron}>
              <FaChevronRight />
            </div>
          </div>
        </div>
        <div className={style.grid__images}>
          {productCard?.map((image) => {
            return (
              <ProductCard
                key={image.id}
                {...image}
                productStyle={{ margin: 0 }}
              />
            );
          })}
        </div>
        <div className={style.active__Link}>{active}</div>
      </div>
    </ScrollToTop>
  );
};

export default Showcase;
