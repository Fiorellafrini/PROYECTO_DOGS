import React from "react"


const Card = ({ id, name, image, weight, temperaments }) => {
    return(
        <div>
            <img src={image} alt={name}></img>
            <h1>{id}</h1>
            <h1>{weight}</h1>
            <h1>{temperaments}</h1>
        </div>
    )
}

export default Card;