import { useState, useEffect } from "react";
import GamesContainer from "../../components/GamesContainer/GamesContainer.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import style from "./Home.module.css";
import { useDispatch, useSelector } from 'react-redux'
import getGames from "../../redux/actions/getGames.js";


function Home() {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [gamesFromStorage, setGamesFromStorage] = useState([]);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getGames())
  }, [dispatch])

  const {videogames} = useSelector(state=>state)
// console.log(videogames)

  useEffect(() => {
    setGamesFromStorage(localStorage.setItem('videogames', JSON.stringify(videogames))); 
    setGamesFromStorage(videogames)
  },[videogames] );

  const calculateTotalPages = (totalGames, currentPage) => {
    return Math.ceil(totalGames / pageSize);
  };

  return (
    <div className={style.main}>
     
      <GamesContainer
        currentPage={currentPage}
        pageSize={pageSize}
        games={gamesFromStorage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={calculateTotalPages(
          gamesFromStorage.length,
          currentPage,
          pageSize
        )}
        onPageChange={(page) => setCurrentPage(page)}
        setPageSize={(size) => setPageSize(size)}
      />
    </div>
  );
}

export default Home;
 