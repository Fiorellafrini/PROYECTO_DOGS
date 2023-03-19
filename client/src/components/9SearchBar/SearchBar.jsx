import React, { useState } from "react";
import {useDispatch} from "react-redux";
import styles from "../9SearchBar/SearchBar.module.css"
import { Link } from "react-router-dom";
import { cleanCards, getDogs, getDogsName } from "../../redux/action";


const SearchBar = () => {
   const dispatch = useDispatch();

   const [name, setName] = useState("");

   function handleChange(event){
    setName(event.target.value);
   }

   function handleSubmit(event){
    event.preventDefault(); // evita que se actualice la pagina 
    dispatch(getDogsName(name));
    setName(" ")
   }
   
   const reset = () => {
    dispatch(cleanCards())
    dispatch(getDogs())
}
    return (
        <div>
            <input className={styles.input} type="text" placeholder="Search dogs..." onChange={(event)=> handleChange(event)}></input>
            <button className={styles.button} type="submit" onClick={(event)=> handleSubmit(event)}>🔍</button>
            <Link to="/home">
                <button className={styles.btn} onClick={reset} >Delete Search 🗑</button>
            </Link>
        
        </div>
    )
}

export default SearchBar;