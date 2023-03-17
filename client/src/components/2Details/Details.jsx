import React from "react";
import { getDetails } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
// import Loading from "../11Loading/Loading";
// import styles from "..2Details/Details.module.css"

const Details = () => {
    const { id } = useParams();
    const dogsDetails
    // {name, 
    //     image, 
    //     height, 
    //     weight, 
    //     life_span, 
    //     breed_group, 
    //     bred_for, 
    //     origin, 
    //     temperaments}
         = useSelector((state) => state.details)
    // const details = useSelector(state => state.details)
    const dispatch = useDispatch();


  
// console.log(id);

    useEffect(()=> {
        dispatch(getDetails(id))
    }, [dispatch, id])

    return(
        <div>
            {dogsDetails.length > 0 ?
            <div>
                
                <Link to= {`/home`}><button>Home</button></Link>

            <h1>Name: {dogsDetails[0].name ? dogsDetails[0].name : ' Data not found' }</h1>

            <img src={dogsDetails[0].image ? dogsDetails[0].image : ' Data not found'} alt=""></img>
           
            <p>Height: {dogsDetails[0].height? dogsDetails[0].height : ' Data not found'}</p> 

            <p>Weight: {dogsDetails[0].weight? dogsDetails[0].weight : ' Data not found'}</p> 

            <p>Life span: {dogsDetails[0].life_span? dogsDetails[0].life_span : ' Data not found'}</p> 

            <p>Breed group: {dogsDetails[0].breed_group? dogsDetails[0].breed_group : ' Data not found'}</p> 

            <p>Bred for: {dogsDetails[0].bred_for? dogsDetails[0].bred_for : ' Data not found'}</p> 

            <p>Origin: {dogsDetails[0].origin? dogsDetails[0].origin : ' Data not found'}</p>

            <p>Temperaments: {dogsDetails[0].temperaments? dogsDetails[0].temperaments : ' Data not found'}</p> 
            
            
            {/* <div className={styles.divBtn}>
            <button className={styles.btn} onClick={handleUpdate}>Edit</button> 
            <button className={styles.btn} onClick={handleDelete}>Delete</button>
          </ div>  */}


            {/* // <Link to="/home">
            //   <button>BACK</button>
            // </Link> */}
            {/* </> */}
                {/* : ""} */}
        </div> : <h1> Loading...</h1> }
        </div>
    )
}


export default Details;