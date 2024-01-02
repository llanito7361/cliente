import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";

const SearchBar = ({ gamesFromStorage }) => {
  const [search, setSearch] = useState("");

  const onSearch = () => {

    let juegoBuscado = gamesFromStorage.filter(juego => juego && juego.name && juego.name.toLowerCase().includes(search.toLowerCase()));
    console.log(juegoBuscado);
     localStorage.setItem('searchedGames', JSON.stringify(juegoBuscado))
     console.log(typeof(localStorage.searchedGames))

  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={style.searchBar}>
      <input value={search} type="text" onChange={handleChange} placeholder="  buscar..." className={style.input}/>
      <Link
       to="/videogamesSearch"
       onClick={onSearch}
       className={style.Link}
      >
        <span role='img' aria-label="search icon" className={style.lupa}>🔍</span>
 </Link>
    </div>
  );
};

export default SearchBar;
