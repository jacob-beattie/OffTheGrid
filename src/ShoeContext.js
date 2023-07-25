import React, { createContext, useReducer } from 'react';

// Define the initial state
const initialState = {
  shoes: [], // An array to store the selected shoes
};

// Create the context
export const ShoeContext = createContext();

// Define the reducer function
const shoeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SHOE':
      // Check if the shoe is already added
      if (!state.shoes.includes(action.payload)) {
        return {
          ...state, // Spread the existing state
          shoes: [...state.shoes, action.payload], // Add the new shoe to the array
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

