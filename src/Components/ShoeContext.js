// ShoeContext.js
import React, { createContext, useReducer } from "react";

const initialState = {
  shoes: [],
};

const ShoeContext = createContext();

const shoeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SHOE":
      return {
        ...state,
        shoes: [...state.shoes, action.payload],
      };
    case "REMOVE_SHOE":
      return {
        ...state,
        shoes: state.shoes.filter((shoe) => shoe.name !== action.payload),
      };
    default:
      return state;
  }
};

const ShoeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoeReducer, initialState);

  return (
    <ShoeContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoeContext.Provider>
  );
};

export { ShoeContext, ShoeProvider };
