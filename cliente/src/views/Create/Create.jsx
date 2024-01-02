import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Create.module.css';

const Create = () => {
  const [juegos, setJuegos] = useState([]);
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    const storedJuegos = JSON.parse(localStorage.getItem('videogames')) || [];
    const storedGenres = JSON.parse(localStorage.getItem('genres')) || [];
    const storedPlatform = JSON.parse(localStorage.getItem('platforms')) || [];

    setJuegos(storedJuegos);
    setGenres(storedGenres);
    setPlatforms(storedPlatform);
  }, []);

  // Restaurar el estado local después de la creación exitosa
  const updateLocalState = (newGame) => {
    const updatedJuegos = [...juegos, newGame];
    setJuegos(localStorage.setItem('videogames', JSON.stringify(updatedJuegos)));
  };

  const [games, setGames] = useState({
    name: '',
    releaseDate: '',
    rating: '',
    genreName: '', // Cambia 'genre' a 'genreName'
    platformName: '', // Nuevo campo para la plataforma
  });

  const [errors, setErrors] = useState({
    name: '',
    releaseDate: '',
    rating: '',
    genre: '',
    platform: '', // Nuevo campo para el error de la plataforma
  });

  const validate = (property, value) => {
    switch (property) {
      case 'name':
        setErrors({ ...errors, name: value.trim() ? '' : 'Nombre vacío' });
        break;

      case 'releaseDate':
        setErrors({ ...errors, releaseDate: value.trim() ? '' : 'Fecha de lanzamiento vacía' });
        break;

      case 'rating':
        setErrors({ ...errors, rating: value.trim() ? '' : 'Clasificación vacía' });
        break;

      case 'genreName': // Cambia 'genre' a 'genreName'
        setErrors({ ...errors, genre: value.trim() ? '' : 'Géneros vacíos' });
        break;

      case 'platformName': // Nuevo caso para la plataforma
        setErrors({ ...errors, platform: value.trim() ? '' : 'Plataformas vacías' });
        break;

      default:
        break;
    }
  };

  const changeHandler = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    validate(property, value);

    setGames({ ...games, [property]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Verificar si hay errores antes de enviar
    if (Object.values(errors).some((error) => error)) {
      alert('Hay errores en el formulario. Por favor, corrige los campos marcados.');
    } else {
      try {
        // Hacer la llamada a axios y asignar el resultado a 'response'
        const response = await axios.post('http://localhost:3001/videogames', {
          name: games.name,
          releaseDate: games.releaseDate,
          rating: games.rating,
          genreName: games.genreName, // Cambia 'genre' a 'genreName'
          platformName: games.platformName, // Nuevo campo para la plataforma
        });

        // Verificar la respuesta del servidor y manejarla en consecuencia
        if (response.data.success) {
          console.log('Juego creado con éxito:', response.data.game);
          // Restaurar el estado después de la solicitud exitosa
          alert('Juego creado con éxito');
          setGames({ name: '', releaseDate: '', rating: '', genreName: '', platformName: '' });

          // Utilizar la función para actualizar el estado local
          const updatedLocalStorage = [...juegos, response.data.game];
          updateLocalState(updatedLocalStorage);

          alert('Juego creado con éxito');
        } else {
          console.error('Error al crear el juego:', response.data.message);
        }
      } catch (error) {
        console.error('Error completo:', error);
      }
    }
  };

  return (
    <>
      <h3 className={styles.title}>Crea un juego</h3>
      <form onSubmit={submitHandler}>
        <div className="">
          <label htmlFor="name">Nombre: </label>
          <input
            className={styles.inputt}
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            value={games.name}
            onChange={changeHandler}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div className="">
          <label htmlFor="rating">Rating: </label>
          <input
            className={styles.inputt}
            type="text"
            id="rating"
            name="rating"
            placeholder="Rating"
            value={games.rating}
            onChange={changeHandler}
          />
          {errors.rating && <span>{errors.rating}</span>}
        </div>

        <div className={styles.releaseData}>
          <label className={styles.inputt} htmlFor="releaseDate">
            Fecha de lanzamiento:
          </label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={games.releaseDate}
            onChange={changeHandler}
          />
          {errors.releaseDate && <span>{errors.releaseDate}</span>}
        </div>

        {/* Agregar campos para géneros y plataformas */}
        <div className="">
          <label htmlFor="genreName">Géneros: </label>
          <select
            id='genreName'
            name='genreName'
            value={games.genreName}
            onChange={changeHandler}
            placeholder='Selecciona un género'
          >
            {genres && genres.map((genero) => (
              <option key={genero.id}>{genero.name}</option>
            ))}
          </select>
          {errors.genre && <span>{errors.genre}</span>}
        </div>

        <div className="">
          <label htmlFor="platformName">Plataformas: </label>
          <select
            id='platformName'
            name='platformName'
            value={games.platformName}
            onChange={changeHandler}
            placeholder='Selecciona una plataforma'
          >
            {platforms && platforms.map((plataforma) => (
              <option key={plataforma.id}>{plataforma.name}</option>
            ))}
          </select>
          {errors.platform && <span>{errors.platform}</span>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Create;
