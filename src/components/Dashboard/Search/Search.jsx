import styles from "./Search.module.scss";
import search from "../../../assets/search.svg";
import { useState } from "react";
import { useData } from "../../../Hooks/useData";

function Search({}) {
  const { dataUser } = useData();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFarms, setFilteredFarms] = useState(dataUser?.farms);

  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter farms based on the search term
    const result = dataUser?.farms.filter((farm) =>
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
      {/* <ul>
        {filteredFarms.map((farm) => (
          <li key={farm.id}>
            <h3>{farm.name}</h3>
            <p>Climate Overview:</p>
            <ul>
              {farm.climateOverview.map((climate, index) => (
                <li key={index}>
                  {climate.day}: Light - {climate.lightIntensity}, Temp -{" "}
                  {climate.temperature}°C
                </li>
              ))}
            </ul>
            <p>Fertilizer Stock:</p>
            <ul>
              {farm.fertilizerStock.map((fertilizer, index) => (
                <li key={index}>
                  {fertilizer.type}: {fertilizer.stock}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Search;
