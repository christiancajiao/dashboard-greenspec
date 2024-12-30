import style from "./Sidebar.module.scss";
import dashboard from "../../assets/dashboard.svg";
import profile from "../../assets/person.svg";
import settings from "../../assets/instant.svg";
import contact from "../../assets/support.svg";
import { Link } from "react-router";

function Sidebar() {
  return (
    <>
      <div className={style.sidebar}>
        <nav>
          <button>
            <img src={dashboard} />
            <Link to="/dashboard">Dashboard</Link>
          </button>
          <button>
            <img src={profile} />
            <Link to="/profile">Profile</Link>
          </button>
          <button>
            <img src={settings} />
            <Link to="/settings">Parameters</Link>
          </button>
          <button>
            <img src={contact} />
            <Link to="/contact">Contact</Link>
          </button>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
