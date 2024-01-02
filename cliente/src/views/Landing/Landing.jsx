import styles from './Landing.module.css'
import {Link} from 'react-router-dom'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getGames from '../../redux/actions/getGames'
import getGenres from '../../redux/actions/getGenres'
import getPlatforms from '../../redux/actions/getPlatforms'


const Landing = () => {
  const dispatch = useDispatch()
  const {videogames,genres, platforms,paginatedGames} = useSelector(state=>state)


  useEffect(()=>{
    dispatch(getGames())
    dispatch(getGenres())
    dispatch(getPlatforms())
  }, [dispatch])
  useEffect(()=>{
    //localStorage para el array videogames de mi state
    if (videogames.length > 0){
      localStorage.setItem('videogames', JSON.stringify(videogames))
    }
    //localStorage para el array genres de mi state
    if(genres.length > 0 ){
      localStorage.setItem('genres',JSON.stringify(genres))
    }
     //localStorage para el array platforms de mi state
    if(platforms.length > 0 ){
      localStorage.setItem('platforms',JSON.stringify(platforms))
    }
    if(paginatedGames.length > 0) {
      localStorage.setItem('paginatedGames', JSON.stringify(paginatedGames))
    }
  },[videogames, genres, platforms, paginatedGames])

// console.log(genres, platforms)

  return(
        <div className={styles.main}>
                <Link to={`/videogames?page=1&pageSize=9`}  className={styles.button}>HOME</Link>
        </div>
    )
}

export default Landing