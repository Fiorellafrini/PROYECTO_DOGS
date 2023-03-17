import React from "react"
import { Link } from "react-router-dom";


const Card = ({ id, name, image, weight, temperaments }) => {
    return(
        <div>
            <Link to={`/dogs/${id}`}>
            <h1>Breed of dog: {name}</h1>
            </Link>
            <h1>Weight: {weight}Kg.</h1>
            <h1>Temperaments: {temperaments}</h1>
            <img src={image} alt={image}></img>
            
        </div>
    )
}

export default Card;