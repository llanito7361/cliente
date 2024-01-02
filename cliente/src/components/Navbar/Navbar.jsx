import { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SortDropdown from "../SortDropdown/SortDropdown";
import { Link } from "react-router-dom/";

const Navbar = () => {
  const [gamesFromStorage, setGamesFromStorage] = useState([]);

const handleSortChange = (sortedGames) => {
    setGamesFromStorage(sortedGames)
}

  useEffect(() => {
    
    const storedGames = JSON.parse(localStorage.getItem("videogames"));
    setGamesFromStorage(storedGames || []);
  }, []);

  return (
    <div className={style.navbar}>
      <Link to="/videogames" className={`${style.button} ${style.botonHome}`}>
        HOME
        <span role="img" aria-label="home" className={style.casita}>
          🏠
        </span>
      </Link>
      <div>
        <SortDropdown 
          onChange={handleSortChange}
        />
      </div>
      <SearchBar
        gamesFromStorage={gamesFromStorage}
        // onSearch={onSearch}
      />
      <Link to="/create" className={`${style.button} ${style.botonCreate} `}>
        CREATE
        <span role="img" aria-label="home" className={style.crear}>
          🎨
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
