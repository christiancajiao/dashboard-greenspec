import style from "./Sidebar.module.scss";
import dashboard from "../../assets/dashboard.svg";
import profile from "../../assets/person.svg";
import settings from "../../assets/instant.svg";
import contact from "../../assets/support.svg";
import logoutIcon from "../../assets/logout_icon.svg";

import { Link, useLocation } from "react-router";
import { useAuth } from "../../Hooks/useAuth";
function Sidebar() {
  const { logout } = useAuth();

  function handleLogout() {
    logout();
  }
  const location = useLocation();
  return (
    <>
      <div className={style.sidebar}>
        <nav>
          <Link to="/dashboard">
            <button
              className={
                location.pathname === "/dashboard" ? style.active : null
              }
            >
              <img src={dashboard} />
              Dashboard
            </button>
          </Link>

          <Link to="/profile">
            <button
              className={location.pathname === "/profile" ? style.active : null}
            >
              <img src={profile} />
              Profile{" "}
            </button>
          </Link>

          <Link to="/settings">
            <button
              className={
                location.pathname === "/settings" ? style.active : null
              }
            >
              <img src={settings} />
              Parameters{" "}
            </button>
          </Link>

          <Link to="/contact">
            <button
              className={location.pathname === "/contact" ? style.active : null}
            >
              <img src={contact} />
              Contact{" "}
            </button>
          </Link>

          <button style={{ alignSelf: "end" }} onClick={handleLogout}>
            <img src={logoutIcon} />
            Log out
          </button>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
