import React, { createContext, useState } from "react";
import { AuthContext } from "../../Hooks/useAuth";
export const LoginContext = createContext();

function LoginProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const hardcodedUser = {
      username: "t",
      password: "p",
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
