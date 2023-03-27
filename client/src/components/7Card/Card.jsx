import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../7Card/Card.module.css";
// import { deleteDog, getDogs } from "../../redux/action";


const Card = ({ id, name, image, weightMin, weightMax, temperaments }) => {

  return (
    <div className={styles.card}>
      {/* <button className={styles.button} onClick={() => handleDelete(id)}> */}
      {/* <button className={styles.button} onClick={onClose}>X
        </button> */}

      <Link className={styles.link} to={`/dogs/${id}`}>
        <h1 className={styles.name}>{name}</h1>
        <img className={styles.img} src={image} alt={image}></img>
        <h1 className={styles.wei}>Weight Min: {weightMin} Kg.</h1>
        <h1 className={styles.wei}>Weight Max: {weightMax} Kg.</h1>
        <h1 className={styles.temp}>Temperaments: {temperaments}</h1>
      </Link>
     
    </div>
  );
};

export default Card;
