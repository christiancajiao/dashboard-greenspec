import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [isOn, setIsOn] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const setModal = (id) => {
    setCurrentId(id); // Set the ID of the caller
    setIsOn((prev) => !prev); // Toggle the modal
  };
  return (
    <ModalContext.Provider value={{ isOn, setModal, currentId }}>
      {children}
    </ModalContext.Provider>
  );
}
