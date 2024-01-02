import React from 'react';
import Game from '../Game/Game';
import { Link } from 'react-router-dom';
import style from './SearchedGames.module.css';

const SearchedGames = () => {
  const resultadoBusqueda = JSON.parse(localStorage.getItem('searchedGames'));
  console.log(resultadoBusqueda);

  return (
    <div className={style.searchedGamesContainer}>
      {resultadoBusqueda && resultadoBusqueda.length > 0 ? (
        resultadoBusqueda.map((juego) => (
          <Game
            className={style.cajaLink}
            id={juego.id}
            key={juego.id}
            image={juego.image}
            name={juego.name}
            genres={juego.genres}
          />
        ))
      ) : (
        <p>no hay juegos disponibles</p>
      )}
      <Link to="/videogames" className={style.button}>
        Volver a Home
      </Link>
    </div>
  );
};

export default SearchedGames;
