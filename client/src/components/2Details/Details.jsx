import React from "react";
import { getDetails, cleanDetails } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
// import Loading from "../11Loading/Loading";
import styles from "../2Details/Details.module.css"

const Details = () => {
    const { id } = useParams(); // lo sacamos de la ruta con useparams
    const dogsDetails= useSelector((state) => state.details)
    const dispatch = useDispatch();


  
// console.log(id);

    useEffect(()=> {// ciclos de vida 
        dispatch(getDetails(id)) //cuando se monta, didmount

        return () => dispatch(cleanDetails()) //cuando desmonto el componente deja un obj vacio, unmount
    }, [dispatch, id]) //update

    return(
        <div className={styles.cardsGrid}>
            {dogsDetails.length > 0 ?
            <div>
                <div className={styles.parrafo}>
                <h1>Name: {dogsDetails[0].name ? dogsDetails[0].name : ' Data not found' }</h1>

                <img className={styles.img} src={dogsDetails[0].image ? dogsDetails[0].image : ' Data not found'} alt=""></img>
                    
                    <p>Height: {dogsDetails[0].height? dogsDetails[0].height : ' Data not found'}</p> 
                    <p>Weight: {dogsDetails[0].weight? dogsDetails[0].weight : ' Data not found'}</p> 
                    <p>Life span: {dogsDetails[0].life_span? dogsDetails[0].life_span : ' Data not found'}</p> 
                    <p>Breed group: {dogsDetails[0].breed_group? dogsDetails[0].breed_group : ' Data not found'}</p> 
                    <p>Bred for: {dogsDetails[0].bred_for? dogsDetails[0].bred_for : ' Data not found'}</p> 
                    <p>Origin: {dogsDetails[0].origin? dogsDetails[0].origin : ' Data not found'}</p>
                    <p>Temperaments: {dogsDetails[0].temperaments? dogsDetails[0].temperaments : ' Data not found'}</p> 
                </div>

                <Link to="/home">
                    <button className={styles.link}>BACK</button>
                </Link>
           
            </div> : <h1> Loading...</h1> }
        </div>
    )
}


export default Details;