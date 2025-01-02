import React, { createContext, useEffect, useState } from "react";
import data from "./data.json";
import { DataContext } from "../../Hooks/useData";

function DataProvider({ children }) {
  const [dataUser, setDataUser] = useState(null);

  function selectFarm(selectedFarm) {
    const filterFarm = data.farms.filter((farm) => {
      return farm.name === selectedFarm;
    });
    setDataUser(filterFarm);
  }
  function initializeUserData() {
    setDataUser(data.farms[0] || null);
  }

  return (
    <DataContext.Provider
      value={{ dataUser, selectFarm, data, initializeUserData }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataProvider;
