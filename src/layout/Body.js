/** @format */

import React, { useEffect, useState } from "react";
import Advertisement from "../components/Advertisement";
import Row from "../components/Row";
import style from "./body.module.css";
import advert1 from "../assets/advert.jpg";
import advert2 from "../assets/hero-image.jpg";
import { productCardDetails } from "../data";
import { useProductContext } from "../global/hooks";

const Body = () => {
  const { addItemsToBasket } = useProductContext();

  const [menCol, setMenCol] = useState([]);
  const [womenCol, setWomenCol] = useState([]);
  const [kiddiesCol, setKiddiesCol] = useState([]);
  const [trendingCol, setTrendingCol] = useState([]);
  const [accessoriesCol, setAccessoriesCol] = useState([]);

  const [menTotalCol, setMenTotalCol] = useState([]);
  const [womenTotalCol, setWomenTotalCol] = useState([]);
  const [kiddiesTotalCol, setKiddiesTotalCol] = useState([]);
  const [trendingTotalCol, setTrendingTotalCol] = useState([]);
  const [accessoriesTotalCol, setAccessoriesTotalCol] = useState([]);

  const handleCardDetails = (data, str, total, arr) => {
    // Reuseable function
    // the func expects array containing all products (data)
    //the (data) is to be filtered using one of it's object properties (str/collection)
    //we use the ( total) to store the filtered items in a  state
    // finally using useState we return only 6 of those items in an array (arr)

    let container = [];
    let filteredItem = data
      .filter(({ collection }) => collection === str)
      .map((item, index) => {
        if (index <= 5) {
          container.push(item);
        }
      });

    total([...filteredItem]); //fillters the
    return arr([...container]);

    //test functions in component
  };

  useEffect(() => {
    addItemsToBasket();

    handleCardDetails(
      productCardDetails,
      "kiddies",
      setKiddiesTotalCol,
      setKiddiesCol
    );
    handleCardDetails(productCardDetails, "men", setMenTotalCol, setMenCol);
    handleCardDetails(
      productCardDetails,
      "women",
      setWomenTotalCol,
      setWomenCol
    );
    handleCardDetails(
      productCardDetails,
      "trending",
      setTrendingTotalCol,
      setTrendingCol
    );
    handleCardDetails(
      productCardDetails,
      "accessories",
      setAccessoriesTotalCol,
      setAccessoriesCol
    );
  }, []);

  return (
    <div className={style.body}>
      <div className={style.container}>
        <Row
          title="ACCESSORIES"
          cards={accessoriesCol}
          total={accessoriesTotalCol.length}
          buttonText="SEE ALL ACCESSORIES"
          smallText="wristwatches, bangles, ipod..."
        />
        <Row
          title="MEN"
          cards={menCol}
          total={menTotalCol.length}
          buttonText="SEE ALL MEN ACCESSORIES"
          smallText="shirt, shoes, trousers... "
        />

        <p
          style={{
            textAlign: "center",
            color: "red",
            marginBottom: ".5rem",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          ADVERT!!!
        </p>
        <Advertisement src={advert1} />

        <Row
          title="WOMEN"
          cards={womenCol}
          total={womenTotalCol.length}
          buttonText="SEE ALL WOMEN ACCESSORIES"
          smallText="topbra, heels, bangels..."
        />
        <Row
          title="KIDDIES"
          cards={kiddiesCol}
          total={kiddiesTotalCol.length}
          buttonText="SEE ALL KIDDIES ACCESSORIES"
          smallText="toys, shirt, sneakers..."
        />

        <Advertisement
          src={advert2}
          smallText="OFFER LAST TILL THE LAST DAY OF THE MONTH"
          bigText={"LAVISH DISCOUNT"}
          spanText="50%"
        />

        <Row
          title="TRENDING"
          total={trendingTotalCol.length}
          cards={trendingCol}
          buttonText="SEE ALL TRENDING ACCESSORIES"
          smallText="Top trending wears & accessories..."
        />
      </div>
    </div>
  );
};

export default Body;
