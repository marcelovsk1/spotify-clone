import React, { createContext, useContext, useReducer } from "react";

// Create a context
export const DataLayerContext = createContext();

// Create a provider component
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);
