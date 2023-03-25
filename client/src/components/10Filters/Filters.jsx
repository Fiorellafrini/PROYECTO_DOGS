import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import {useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


import {
    filterByOrigin,
    filterTemperament, 
    getTemperaments, 
    orderByName,
    // orderByWeightMax,
    orderByWeight 
} from '../../redux/action'
import style from "./Filters.module.css"


export default function Filters() {
    const dispatch = useDispatch();

const allTemperaments = useSelector ((state) => state.temperaments)

const [selectedOption, setSelectedOption] = useState("default");

    const history = useHistory()


    useEffect(() => {
        if (!allTemperaments || allTemperaments.length === 0) {
            // dispatch(getDogs())
            dispatch(getTemperaments())
        }
    },[])


      function handleTemperament(event) {
        event.preventDefault();
        dispatch(filterTemperament(event.target.value))
        // history.push("/home")
    };

    function handleOrigin (event) {
        event.preventDefault()
        dispatch(filterByOrigin(event.target.value))
        // history.push("/home")
    }

      function handleOrder(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        // history.push("/home")
    };

    // function handleOrderWeightMax(e) {
    //     e.preventDefault();
    //     dispatch(orderByWeightMax(e.target.value))
    //     history.push("/home")
    // };

    function handleOrderWeight(e) {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value))
        // history.push("/home")
    };

 
    return (
        <div className={style.container}>


                <select name="filterTemperament" value={selectedOption}
                //  defaultValue="Default" 
                 onChange={(event) => handleTemperament(event)} >
                        <option key="Temperaments" value="" hidden>Filter By Temperament</option>
                        <option key="All" value="All">All</option>
                        {
                            allTemperaments?.map((temperament, i) => {
                                return <option key={temperament.name + i} value={temperament.name}>{temperament.name}</option>
                            })
                            }
                </select>

                <select name="filterByOrigin" value={selectedOption}
                //  defaultValue="Default" 
                 onChange={(event) => handleOrigin(event)} >
                    <option value="default" disabled>Order by origin</option>
                    <option value="allDogs">Api+Db</option>
                    <option value="Created">Data Base</option>
                    <option value="Api">Api</option>
                </select>

                <select className={style.selectList} name="orderByName"
                    // defaultValue={"default"} 
                    value={selectedOption} 
                    onChange={handleOrder}>
                        <option value="default" disabled>Order by name</option>
                        <option value="Ascendent">A-Z</option>
                        <option value="Descendent">Z-A</option>
                </select>

        
                <select className={style.selectList} name="orderByWeight"
                    value={selectedOption} 
                    onChange={handleOrderWeight}>
                        <option value="default" disabled> Order Weight </option>
                        <option value='asc'> - Weight</option>
                        <option value='dec'> + Weight</option>
                </select>

                {/* <select className={style.selectList} name="orderByWeightMax"
                    defaultValue={"default"} 
                    onChange={handleOrderWeightMax}>
                        <option value="default" disabled>  Order Weight Max</option>
                        <option value='asc'> - Weight</option>
                        <option value='dec'> + Weight</option>
                </select> */}
        </div>
    );
};