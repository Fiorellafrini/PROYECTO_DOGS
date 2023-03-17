import React from "react";
import { getDetails } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
// import styles from "..2Details/Details.module.css"

const Details = () => {
    const { id } = useParams();
    const {name, 
        image, 
        height, 
        weight, 
        life_span, 
        breed_group, 
        bred_for, 
        origin, 
        temperaments} = useSelector((state) => state.details)
    // const details = useSelector(state => state.details)
    const dispatch = useDispatch();


// console.log(id);

    useEffect(()=> {
        dispatch(getDetails(id))
    }, [dispatch, id])

    return(
        <div>
            <img src={image} alt={image}></img>
            <h1>Name:{name}</h1>
            <p>Height:{height}</p> 
            <p>Weight:{weight}</p> 
            <p>Life span:{life_span}</p> 
            <p>Breed group:{breed_group}</p> 
            <p>Bred for:{bred_for}</p> 
            <p>Origin:{origin}</p> 
            <p>Temperaments:{temperaments}</p> 
            
            <Link to="/home">
              <button>BACK</button>
            </Link>

        </div>
    )
}


export default Details;