import { useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { getDogs } from "../../redux/action"; //me traigo la action 
import Card from "../7Card/Card";
import React from 'react';



const AllCards = () => {

    const dispatch = useDispatch()
    const allDogs = useSelector((state)=> state.allDogs)//trae info del estdo global

    useEffect(() =>{ //cuando se monta
        dispatch(getDogs()) //le digo que busque la info de getDogs
    },[dispatch])

    return(
        <div>
            <div>
            {allDogs ? allDogs.map(dog => 
                        <Card
                            name={dog.name}
                            id={dog.id}
                            key={dog.id}
                            image={dog.image}
                            weight={dog.weight.metric} 
                            height={dog.height.metric}
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