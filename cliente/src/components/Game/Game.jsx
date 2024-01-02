import style from './Game.module.css';
import { Link } from 'react-router-dom/';
import img from '../../images/joystick.png'; 

const Game = ({ image, name, genres, id, rating }) => {
  // const idd = parseInt(id);
  return (
    <div className={style.cajaLink}>
      <Link to={`/detail/${id}`} onClick={() => { console.log(id) }}>
        <div className={style.cajaImagen}>
          {image ? (
            <img src={image} alt={name} className={style.cajaImg} />
          ) : (
            <img src={img} alt={name} className={style.cajaImg} />
          )}
        </div>
      </Link>
      <h3 className={style.caja_titulo}>{name}</h3>
      <ul className={style.cajaUnorderList}>
        {genres &&
          genres.map((genero, index) => (
            <li className={style.listItem} key={index}>
              {genero.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Game;
