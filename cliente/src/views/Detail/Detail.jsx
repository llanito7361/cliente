import React, { useEffect, useState } from 'react';
import style from './Detail.module.css';
import { Link, useParams } from 'react-router-dom';
import GameDetail from '../../components/Game/GameDetail';
import { useDispatch, useSelector } from 'react-redux';
import getGameById from "../../redux/actions/getGameById.js";

const Detail = () => {
  const { id} = useParams();
  console.log("id ni bien empiza", id)
  // const games = (localStorage.setItem('gameById', ));
  const [juegoPorId, setJuegoPorId] = useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getGameById(id))
  }, [dispatch, id])

  const {gameById} = useSelector(state=>state)
  // console.log(gameById)

  useEffect(()=>{
    // setJuegoPorId(localStorage.setItem('gameById', JSON.stringify(gameById)))
    setJuegoPorId(gameById)
  // console.log('ID del juego:', id.toString())

  },[gameById])

  const game = juegoPorId[0] 

  if(!game){
    return(<p>Loading...</p>)
  }
//   const {description} = game

//   const removeHtmlTags = (game) => {
//     return game.description.replace(/<[^>]*>/g, '')
//   }
// const descripcion = removeHtmlTags(description)

// console.log(descripcion)


  // const { name, background_image, rating, platforms, genres, release, description} = game;
// console.log('juego ya dentro del state',juegoPorId)
console.log(game)
  return (
    <div className={style.main}>
     {game && Object.keys(game).length > 0 ? (
      <GameDetail
        name={game.name}
        image={game.background_image}
        rating={game.rating}
        released={game.released}
        genres={game.genres}
        platforms={game.platforms}
        description={game.description}
      />
    ) : (
      <p>Loading...</p>
    )}
      <Link to='/videogames' className={style.button}>
        Home
      </Link>
    </div>
  );
};

export default Detail;
