import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../9SearchBar/SearchBar.module.css";
import { Link } from "react-router-dom";
import { cleanCards, getDogs, getDogsName } from "../../redux/action";

const SearchBar = () => {
  const dispatch = useDispatch();


  const [name, setName] = useState(""); //creamos un estado
  //------nombre del estado, nombre de la fn de ese estado, q me permite actualizar el estado= (valor inicial)
  // fn hadler son ejecutadoras de eventos
  function handleChange(event) {
    setName(event.target.value);
    // actualiza el estado. es el valor del elemento que ha cambiado
  }

  function handleSubmit(event) {
    event.preventDefault(); // evita que se recargue la pagina, es necesario para evitar que se recargue y se pierda la info del estado
    dispatch(getDogsName(name)); // el dispatch envia una accion a redux,donde esa fn( que fue previamente definida) de encarga de hacer la péticion para obtener el name a partir de name que puso el usuario.
    setName("");
  }

  const reset = () => {
    dispatch(cleanCards());
    dispatch(getDogs());
  };


  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Search dogs..."
        value={name}
        onChange={(event) => handleChange(event)}
      ></input>

      <button
        className={styles.button}
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        🔍
      </button>

      <Link to="/home">
        <button className={styles.btn} onClick={reset}>
          Delete Search and Filters 🗑
        </button>
      </Link>

   
  

    </div>
  );
};

export default SearchBar;
