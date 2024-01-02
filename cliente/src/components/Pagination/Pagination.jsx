import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange, setPageSize}) => {
  const history = useHistory();

  // const [newPage,setNewPage] = useState(1)

  const handlePageChange = (newPage) => {
    const updatedPageSize = newPage === 1 ? 9 : 15;
    setPageSize(updatedPageSize) // Ajusta el tamaño de la página cuando estás en la primera página
    if (newPage >= 1 && newPage <= totalPages) {

      history.push(`/videogames?page=${newPage}&pageSize=${updatedPageSize}`);
      onPageChange(newPage)
    }
   
  };

  
  return (
    <div className={styles.main}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.button}
      >
        Anterior
      </button>
      <span >Página {currentPage}</span>
      <button
        className={styles.button}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
