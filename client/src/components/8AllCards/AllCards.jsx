import { useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { getDogs, cleanCards } from "../../redux/action"; //me traigo la action 
import Card from "../7Card/Card";
import React from 'react';
import styles from './AllCards.module.css'




const AllCards = () => {

    const dispatch = useDispatch()
    
    // const dogs = useSelector(state => state.order);
    const dogs = useSelector((state)=> state.dogs)//trae info del estdo global

    useEffect(() =>{ //cuando se monta
        dispatch(getDogs()) //le digo que busque la info de getDogs
        return () => dispatch(cleanCards()) //cuando desmonto el componente deja un arr vacio, unmount
 
    },[dispatch])

    // console.log(allDogs);



    return(
        <div>
            <div className={styles.cards}>
            {dogs.length > 0 ? dogs.map(dog => 
                        <Card
                            name={dog.name}
                            id={dog.id}
                            key={dog.id}
                            image={dog.image}
                            weight={dog.weight}
                            height={dog.weight}
                            breed_group={dog.breed_group}
                            origin={dog.origin}                 
                            temperaments={dog.temperaments}
                        />
                    )
                    :
                    <h1>Loading...</h1>
                }
            </div>
        </div>
    )}

   
export default AllCards;