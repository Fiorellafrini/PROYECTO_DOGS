import React from "react"
import { Link } from "react-router-dom";


const Card = ({ id, name, image, weight, temperaments }) => {
    return(
        <div>
            <Link to={`/dogs/${id}`}>
            <h1>name:{name}</h1>
            </Link>
            <h1>weight:{weight}</h1>
            <h1>temperaments:{temperaments}</h1>
            <img src={image} alt={image}></img>
            
        </div>
    )
}

export default Card;