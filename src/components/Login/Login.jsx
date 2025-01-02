import { useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import style from "./Login.module.scss";
import { Navigate } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login, user } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);

    if (!success) {
      setError("Invalid credentials");
    } else {
      setError(null);
    }
  };

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className={style.container_login}>
      <div>
        <h1 style={{ color: "green" }}>GREENSPEC</h1>
      </div>

      <form onSubmit={handleLogin} className={style.card}>
        <div className={style.field}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className={style.submit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
