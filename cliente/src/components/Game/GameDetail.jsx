import style from "./GameDetail.module.css";
import img from '../../images/joystick.png'
const GameDetail = ({ image, name, genres, rating, platforms, released, description }) => {
  return (
    <div className={style.main}>
      <div className={style.contenedorImagen}>
        {image ? (
          <img className={style.img} src={image} alt={name} />
        ) : (
          <img className={style.img} src={img} alt={name} />
        )}
      </div>

      <div className={style.data}>
        <h3>{name}</h3>
        <p>{description}</p>
        <h5>Rating: </h5>
        <p>{rating}</p>
        <h5>Fecha de lanzamiento: </h5>
        <p>{released}</p>
        <div className={style.ul}>
          <ul className={style.ulGeneros}>
            <h5>Generos</h5>
            {genres&&genres.length>0&&genres.map((genero, index) => (
              <li key={index}>{genero.name}</li>
            ))}
          </ul>
          <ul className={style.ulPlataformas}>
            <h5>Plataformas</h5>
            {platforms&&platforms.length>0&&platforms.map((plataforma, index) => (
              <li key={index}>{plataforma.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
