import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { pageDogs } from "../../redux/action";
import styles from "../12Paginado/Paginado.module.css";
// import { useRef } from "react";

const Paginado = ({ copyDogs, pageDogs }) => {
  // La variable dogs representa la lista de elementos que se paginará.

  const [dogs, setDogs] = useState(copyDogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  const [currentPaginado, setCurrentPaginado] = useState([]);

  let totalPages = Math.ceil(dogs.length / perPage);
 
  const pagination = [];
  for (let i = 1; i <= totalPages; i++) {
    pagination.push(i);
  }

  const handlePrev = () => {
    currentPage === 1
      ? setCurrentPage(currentPage)
      : setCurrentPage(currentPage - 1);
  };
 
  const handleNext = () => {
    currentPage === pagination.length
      ? setCurrentPage(currentPage)
      : setCurrentPage(currentPage + 1);
  };


 
  const start = () => {
    setCurrentPage(1);
  };

  const end = () => {
    setCurrentPage(pagination.length);
  };

  const handleChange = (start, end) => {
    if (!isNaN(start) && !isNaN(end)) {
      pageDogs(start, end);
    }
  };
  // La función primero verifica si ambos start y end son números válidos y si no lo son, llama pageDogscon los argumentos start y . end.

  useEffect(() => {
    if (dogs.length !== copyDogs.length) setDogs(copyDogs);
    // verifica si la dogsmatriz de estado tiene la misma longitud que la copyDogsmatriz de prop. Si no, actualiza el dogsestado con la copyDogsmatriz.
    let numbers = [...currentPaginado];
    // actualiza la templateNumbersmatriz de estado en función de la página actual y el número total de páginas. 
    if (pagination.length < 6) {
    numbers = pagination;
    } else if (currentPage >= 1 && currentPage <= 2) {
      numbers = [1, 2, 3];
    } else if (currentPage > 2 && currentPage < pagination.length - 1) {
      const prevNum = pagination.slice(currentPage - 2, currentPage);
      const nextNum = pagination.slice(currentPage, currentPage + 1);
      // El método slice() no modifica el arreglo original, sino que devuelve un nuevo arreglo con los elementos seleccionados.
      numbers = [...prevNum, ...nextNum];
    } else if (currentPage > pagination.length - 3) {
      const sliced = pagination.slice(pagination.length - 1);
      numbers = [...sliced];
    }
    if (currentPage > totalPages) {
      start();
    }
    setCurrentPaginado(numbers);

    const value = currentPage * perPage; //paginaactual y cantidad de dogs por pagina
    handleChange(value - perPage, value);
  }, [copyDogs, currentPage, perPage, totalPages]);
  // Cuando alguna de estas dependencias cambia, la función de efecto se vuelve a ejecutar.




  // Mantener el estado anterior al regresar a la página
  useEffect(() => {
    const currentPageFrom = localStorage.getItem("currentPage");
    if (currentPageFrom) {
      setCurrentPage(parseInt(currentPageFrom));
    }
  }, []);

  // Actualizar el estado de la página actual al cambiar de página
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  // localStorage es una propiedad del objeto global window en los navegadores web que permite a las páginas web almacenar datos 

  // Dentro de la función de efecto, primero, comprueba si la longitud de dogsy copyDogses diferente. Si es diferente, significa que copyDogsse actualizó, por lo que dogsse actualizó a copyDogs.
  return (
    <>
      <div className={styles.container}>
        <div className={styles.paginadoContainer}>
          <ul>
            <li
              className={`${styles.itens} ${
                currentPage === 1 ? "disabled" : ""
              }`}
            >
              <a className={styles.arrow} onClick={start}>
                ‹‹
              </a>
              <a className={styles.arrow} onClick={handlePrev}>
                ❮
              </a>
            </li>

            {pagination.map((data, index) => {
              return (
                <li key={index} className={styles.itens}>
                  <a
                    className={`${
                      currentPage === data ? styles.current : styles.arrow
                    }`}
                    onClick={() => setCurrentPage(data)}
                  >
                    {data}
                  </a>
                </li>
              );
            })}

            <li
              className={`${styles.itens} ${
                currentPage === pagination.length ? "disabled" : ""
              }`}
            >
              <a className={styles.arrow} onClick={handleNext}>
                ❯
              </a>

              <a className={styles.arrow} onClick={end}>
                ››
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => { //me permite acceder al esado global
  return {
    copyDogs: state.copyDogs,
    dogs: state.dogs,
  };
};
const mapDispatchToProps = (dispatch) => { //me permite despachar action                                        00
  return {
    pageDogs: (start, end) => {
      dispatch(pageDogs(start, end));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginado);