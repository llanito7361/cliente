import styles from './GamesContainer.module.css';
import Game from '../Game/Game';

const GamesContainer = ({currentPage, pageSize, games}) => {


   const startIndex = (currentPage - 1) * pageSize
   const endIndex = startIndex + pageSize
   const paginatedGames = games.slice(startIndex, endIndex)

    return (
        <div className={styles.mainDiv}>
            {paginatedGames.length > 0 ? ( paginatedGames.map((juego) => (
                <Game


                    rating={juego.rating}
                    id={juego.id}
                    key={juego.id} 
                    image={juego.image}
                    name={juego.name}
                    genres={juego.genres}
                />
            ))) : (<p>Cargando...</p>)}
        </div>
    );
}

export default GamesContainer;
