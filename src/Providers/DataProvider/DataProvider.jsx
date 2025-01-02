import React, { createContext, useState } from "react";
import data from "./data.json";

export const DataContext = createContext();
function DataProvider({ children }) {
  const [dataUser, setDataUser] = useState([]);

  function selectFarm(selectedFarm = "Subachoque") {
    const filterFarm = data.farms.filter((farm) => {
      return farm.name === selectedFarm;
    });
    setDataUser(filterFarm);
  }
  console.log(dataUser);
  return (
    <DataContext.Provider value={{ dataUser, selectFarm, data }}>
      {children}
    </DataContext.Provider>
  );
}
export default DataProvider;
