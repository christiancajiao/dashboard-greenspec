import styles from "./Search.module.scss";
import search from "../../../assets/search.svg";

function Search({}) {
  return (
    <div className={styles.container}>
      <input type="search" placeholder="Search for specific data" />
      <button>
        <img src={search} />
      </button>
    </div>
  );
}

export default Search;
