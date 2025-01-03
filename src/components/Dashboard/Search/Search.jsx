import styles from "./Search.module.scss";
import search from "../../../assets/search.svg";
import { useState } from "react";
import { useData } from "../../../Hooks/useData";

function Search({}) {
  const { dataUser, data } = useData();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFarms, setFilteredFarms] = useState(dataUser);

  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter farms based on the search term
    const result = data?.farms.filter((farm) =>
      JSON.stringify(farm).toLowerCase().includes(term)
    );

    setFilteredFarms(result);
  };
  return (
    <div className={styles.container}>
      <input
        type="search"
        placeholder="Search for specific data"
        value={searchTerm}
        onChange={handleSearch}
      />

      {filteredFarms?.length === 0 && <p>No results found</p>}
      <button onClick={handleSearch}>
        <img src={search} />
      </button>
      {searchTerm.length > 2 ? (
        <ul className={styles.options}>
          {filteredFarms?.map((farm) => (
            <div key={farm.id}>
              <h3>{farm.name}</h3>
            </div>
          ))}
        </ul>
      ) : null}
      {/* <ul className={styles.options}>
        {filteredFarms?.map((farm) => (
          <li key={farm.id}>
            <h3>{farm.name}</h3>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Search;
