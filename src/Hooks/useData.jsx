import { useContext, createContext } from "react";

export const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};
