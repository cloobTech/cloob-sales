/** @format */

import ProductCard from "./ProductCard";
import style from "./row.module.css";
import { useNavigate } from "react-router-dom";
import { productCardDetails } from "../data";

const Row = ({ title, cards = [], buttonText, smallText, total }) => {
  const navigate = useNavigate();

  //Function to filter out items for the showcase
  const handleShowcaseDetails = (str) => {
    //pass a string to the func, then transform it to lowercase
    //it has to be in lowercase to match the collection item in data(product__details).
    let col = str.toLowerCase();
    console.log(col);

    //filter out a particular collection of the data
    let filteredItem = productCardDetails.filter(
      ({ collection }) => collection === col
    );

    //store the filtered items in the local storage
    localStorage.setItem("filteredArray", JSON.stringify(filteredItem));

    //navigate to showcase
    navigate("../showcase");
  };

  return (
    <div className={style.row__container}>
      <div className={style.row__title}>
        <p>
          {title}

          <span>{total}</span>
        </p>
        <small>{smallText}</small>
      </div>
      <div className={style.card__row}>
        {cards.map((card) => (
          <ProductCard key={card.id} {...card} />
        ))}
      </div>
      <button
        onClick={() => handleShowcaseDetails(title)}
        className={style.row__button}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Row;
