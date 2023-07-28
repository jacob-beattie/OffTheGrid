// ShoeContext.js

import React, { createContext, useReducer } from 'react';

// Define the initial state
const initialState = {
  shoes: [],
};

// Create the context
export const ShoeContext = createContext();

// Define the reducer function
const shoeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SHOE':
      // Check if the shoe is already added
      if (!state.shoes.some((shoe) => shoe.name === action.payload.name)) {
        return {
          ...state,
          shoes: [...state.shoes, action.payload],
        };
      }
      return state;
    default:
      return state;
  }
};

// Create the ShoeProvider component
export const ShoeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoeReducer, initialState);

  return (
    <ShoeContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoeContext.Provider>
  );
};


