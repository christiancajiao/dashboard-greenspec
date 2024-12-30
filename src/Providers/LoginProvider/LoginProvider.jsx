import React, { createContext, useState } from "react";
export const LoginContext = createContext();

function LoginProvider({ children }) {
  const [login, setLogin] = useState();
  return (
    <LoginContext.Provider value={{ login }}>{children}</LoginContext.Provider>
  );
}
export default LoginProvider;
