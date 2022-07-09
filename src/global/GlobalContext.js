/** @format */

import React, { createContext, useReducer, useState } from "react";
import { productReducer, ACTION } from "./reducer";
import { productCardDetails } from "../data";

export const ProductContext = createContext({
  productState: {},
});

const GlobalContext = ({ children }) => {

  const initialState = {
    basket: [],
    login: true,
  };

  const [productState, dispatch] = useReducer(productReducer, initialState);
  const [render, setRender] = useState();

  //add items to basket;
  const addItemsToBasket = (id) => {
    let isItemAdded = false; // This line of code checks if an item has been added previous

    const { basket } = productState; // destructure the container holding all added item

    //Everytime we click on a card.. we pass the card id to our func
    //we loop through the basket to see if any item id in the basket matches the id we pass
    //if it dosent match, we add the  new item to our basket
    //if it matches, we increase the item's "qty" property by 1 and set "isItemAdded" to true;
    basket.map((product) => {
      if (product.id === id) {
        product.qty++;
        isItemAdded = true;
        setRender(!render);
      }
    });

    let newItem = productCardDetails.filter((item) => item.id === id);

    //THis block of code checks if "isItemAdded"..
    //if the item is true.. no needed adding it
    //else add the item
    if (!isItemAdded) {
      dispatch({ type: ACTION.ADD_ITEMS, payload: newItem });
    }
  };

 

  //Context Value Object

  const value = {
    addItemsToBasket,
    productState,
    render,
    setRender,
    dispatch,
  };

  return (
    <div>
      <ProductContext.Provider value={value}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default GlobalContext;
