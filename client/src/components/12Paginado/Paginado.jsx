import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { pageDogs } from "../../redux/action";
import styles from "../12Paginado/Paginado.module.css";

const Paginado = ({ copyDogs, pageDogs }) => {
  const [dogs, setDogs] = useState(copyDogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8);

  let totalPages = Math.ceil(dogs.length / perPage);

  const pagination = [];
  for (let i = 1; i <= totalPages; i++) {
    //para que me muestre todas la paginas
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

  const [currentPaginado, setCurrentPaginado] = useState([]);

  const handleChange = (start, end) => {
    !isNaN(start) && !isNaN(end) && pageDogs(start, end);
  };

  useEffect(() => {
    if (dogs.length !== copyDogs.length) setDogs(copyDogs);

    let templateNumbers = [...currentPaginado];

    if (pagination.length < 6) {
      templateNumbers = pagination;
    } else if (currentPage >= 1 && currentPage <= 2) {
      templateNumbers = [1, 2, 3];
    } else if (currentPage > 2 && currentPage < pagination.length - 1) {
      const prevNum = pagination.slice(currentPage - 2, currentPage);
      const nextNum = pagination.slice(currentPage, currentPage + 1);
      templateNumbers = [...prevNum, ...nextNum];
    } else if (currentPage > pagination.length - 3) {
      const sliced = pagination.slice(pagination.length - 1);
      templateNumbers = [...sliced];
    }
    if (currentPage > totalPages) {
      start();
    }
    setCurrentPaginado(templateNumbers);

    const value = currentPage * perPage;
    handleChange(value - perPage, value);
  }, [copyDogs, currentPage, perPage, totalPages]);

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

const mapStateToProps = (state) => {
  return {
    copyDogs: state.copyDogs,
    dogs: state.dogs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    pageDogs: (start, end) => {
      dispatch(pageDogs(start, end));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginado);
