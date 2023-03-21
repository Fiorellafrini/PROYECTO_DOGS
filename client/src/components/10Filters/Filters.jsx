import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import {useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useRef } from 'react';

import {
    cleanCards,
    filterByTemperament, 
    getDogs, 
    // filterByCreation, 
    orderByName,
    orderByWeightMax,
    orderByWeightMin 
} from '../../redux/action'
import style from "./Filters.module.css"


export default function Filters() {
    const dispatch = useDispatch();
    // const [setCurrentPageOrder] = useState(1);
    // const [setOrder] = useState('')

//   const weight = useRef();


    const history = useHistory()

    // const handleOrder = (e) => {
    //     e.target.name === "orderByName" && dispatch(orderByName(e.target.value))
    //   }


    //   function handleTemperament(event) {
    //     event.preventDefault();
    //     dispatch(filterByTemperament(event.target.value))
    //     history.push("/home")
    // };

    // const temperamentsSort = useSelector((state) => state.temperaments)?.sort(
    //     function (a, b) {
    //         if (a < b) return -1;
    //         else return 1;
    //     }
    //   );


      function handleOrder(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        // dispatch(getDogs())

        // dispatch(cleanCards())
        // setCurrentPageOrder(1);
        // setOrder(`Ordenado ${e.target.value}`)
        history.push("/home")
    };

    function handleOrderWeightMax(e) {
        e.preventDefault();
        dispatch(orderByWeightMax(e.target.value))
        // setCurrentPageOrder(1);
        // setOrder(`Ordenado ${e.target.value}`)
        history.push("/home")
    };

    function handleOrderWeightMin(e) {
        e.preventDefault();
        dispatch(orderByWeightMin(e.target.value))
        // setCurrentPageOrder(1);
        // setOrder(`Ordenado ${e.target.value}`)
        history.push("/home")
    };

 
    return (
        <div className={style.container}>

                {/* <select onChange={(event) => handleCreated(event)} >
                    <option value="allDogs">Dogs</option>
                    <option value="Created">My Dogs</option>
                    <option value="Api">Api Dogs</option>
                </select> */}

                {/* <select className={style.temp} onChange={(event) => handleTemperament(event)}>
                        <option value="allDogs">Temperaments</option>
                        {temperamentsSort
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((temp) => {
                            return (
                                <option value={temp.name} key={temp.id}>
                                    {temp.name}
                                </option>
                            );
                        })}
                </select>
   */}


                <select className={style.selectList} name="orderByName"
                defaultValue={"default"} 
                onChange={handleOrder}>
                    <option value="default" disabled>Order by name</option>
                    <option value="Ascendent">A-Z</option>
                    <option value="Descendent">Z-A</option>
                </select>

        
                <select className={style.selectList} name="orderByWeightMin"
                defaultValue={"default"} 
                onChange={handleOrderWeightMin}>
                    <option value="default" disabled>  Order Weight Min </option>
                    <option value='asc'> - Weight</option>
                    <option value='dec'> + Weight</option>
                </select>

                <select className={style.selectList} name="orderByWeightMax"
                defaultValue={"default"} 
                onChange={handleOrderWeightMax}>
                    <option value="default" disabled>  Order Weight Max</option>
                    <option value='asc'> - Weight</option>
                    <option value='dec'> + Weight</option>
                </select>
        </div>
    );
};