import React, { createContext, useState } from "react";
import { AuthContext } from "../../Hooks/useAuth";
import { useData } from "../../Hooks/useData";
export const LoginContext = createContext();

function LoginProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const hardcodedUser = {
      username: "elsa@greenspec.com",
      password: "12345",
    };

    if (
      username === hardcodedUser.username &&
      password === hardcodedUser.password
    ) {
      setUser({ username });
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default LoginProvider;
