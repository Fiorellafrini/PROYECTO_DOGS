import React from "react";
import { getDetails, cleanDetails } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
// import Loading from "../11Loading/Loading";
import styles from "../2Details/Details.module.css"
import gif from "../13Extras/loa.gif"
import { useState } from "react";


const Details = () => {
    const { id } = useParams(); // lo sacamos de la ruta con useparams
    const dogsDetails= useSelector((state) => state.details)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000); //  cantidad de tiempo que se muestre el GIF
        return () => clearTimeout(timer);
      }, []);
  
    
// console.log(id);

    useEffect(()=> {// ciclos de vida 
        dispatch(getDetails(id)) //cuando se monta, didmount

        return () => dispatch(cleanDetails()) //cuando desmonto el componente deja un obj vacio, unmount
    }, [dispatch, id]) //update

    return(
        <div className={styles.cardsGrid}>
            {dogsDetails.length > 0 ?
            <div className={styles.container}>
                <div className={styles.parrafo}>
                    <br></br>
                <h1> Name: {dogsDetails[0].name ? dogsDetails[0].name : 'Data not found' }</h1>
                <img className={styles.img} src={dogsDetails[0].image ? dogsDetails[0].image : 'Data not found'} alt=""></img>
                <p>Id: {dogsDetails[0].id ? dogsDetails[0].id : 'Data not found'}</p> 
                <p>HeightMin: {dogsDetails[0].heightMin ? dogsDetails[0].heightMin : 'Data not found' } cm.</p> 
                <p>HeightMax: {dogsDetails[0].heightMax ? dogsDetails[0].heightMax : 'Data not found'} cm.</p>
                <p>WeightMin: {dogsDetails[0].weightMin ? dogsDetails[0].weightMin : 'Data not found'} kg.</p>
                <p>WeightMax: {dogsDetails[0].weightMax ? dogsDetails[0].weightMax : 'Data not found'} kg.</p>
                <p>Life span: {dogsDetails[0].life_span ? dogsDetails[0].life_span : 'Data not found'}</p> 
                <p>Breed group: {dogsDetails[0].breed_group ? dogsDetails[0].breed_group : 'Data not found'}</p> 
                <p>Bred for: {dogsDetails[0].bred_for ? dogsDetails[0].bred_for : 'Data not found'}</p> 
                <p>Origin: {dogsDetails[0].origin ? dogsDetails[0].origin : 'Data not found'}</p>
                <p>Temperaments: {dogsDetails[0].temperaments ? dogsDetails[0].temperaments : 'Data not found'}</p> 
                <br></br>
                </div>
        

                <Link to="/home">
                <br></br>
                <br></br>
                    <button className={styles.link}>BACK</button>
                </Link>
           
            </div> :
             <div class="loading">
             <img src={gif} alt="Loading..." />
            </div>
             }
        </div>
    )
}


export default Details;