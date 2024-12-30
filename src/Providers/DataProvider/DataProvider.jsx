import React, { createContext, useState } from "react";
import data from "./data.json";

export const DataContext = createContext();
function DataProvider({ children }) {
  const dataUser = data;
  return (
    <DataContext.Provider value={{ dataUser }}>{children}</DataContext.Provider>
  );
}
export default DataProvider;
