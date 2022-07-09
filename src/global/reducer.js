/** @format */
export const ACTION = {
  ADD_ITEMS: "ADD_ITEMS",
  REMOVE_ITEMS: "REMOVE_ITEMS",
  RESET_BASKET: "RESET_BASKET",
  SET_SIGNUP: "SET_SIGNUP",
  SET_LOGIN: "SET_LOGIN",
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD_ITEMS:
      const item = action.payload;
      return {
        ...state,
        basket: [...state.basket, ...item],
      };

    case ACTION.REMOVE_ITEMS:
      return {
        ...state,
        basket: state.basket.filter((product) => product.id !== action.id),
      };

    case ACTION.RESET_BASKET:
      return {
        ...state,
        basket: [],
      };

    case ACTION.SET_LOGIN:
      return {
        ...state,
        login: true,
      };

    case ACTION.SET_SIGNUP:
      return {
        ...state,
        login: false,
      };

    default:
      return state;
  }
};
