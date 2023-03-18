import React from "react"
import { Link } from "react-router-dom";
import styles from "../7Card/Card.module.css"

const Card = ({ id, name, image, weight, temperaments }) => {
    return(
        <div className={styles.card}>
            <Link className={styles.link} to={`/dogs/${id}`}>
            <h1 className={styles.name}>{name}</h1>
            </Link>

           



            <img className={styles.img} src={image} alt={image}></img>
            

            <h1 className={styles.wei}>Weight: {weight}Kg.</h1>
            
            <h1 className={styles.temp}>Temperaments: {temperaments}</h1>
            
            
        </div>
    )
}

export default Card;