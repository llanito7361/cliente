// En SortDropdown.jsx
import style from './SortDropdown.module.css'
import {useState} from 'react'
import  sortVideogames  from '../../redux/actions/sortedGames';
import { useDispatch } from 'react-redux';

const SortDropdown = ({ onChange }) => {
  const dispatch = useDispatch();
  const [sortedBy, setSortedBy] = useState('');

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    setSortedBy(sortBy);

    dispatch(sortVideogames(sortBy));
  };

  // Resto del código

  return (
    <div className={style.main}>
      <label htmlFor='sort'>
        Ordenar por:
      </label>
      <select id='sort' value={sortedBy} onChange={handleSortChange}>
        <option value='asc'>Nombre (A-Z)</option>
        <option value='desc'>Nombre (Z-A)</option>
        <option value='rating'>Rating</option>
      </select>
    </div>
  );
};

export default SortDropdown;
