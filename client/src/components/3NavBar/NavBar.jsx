import React from "react";
import { Link } from "react-router-dom";
import styles from "../3NavBar/NavBar.module.css";
import SearchBar from "../9SearchBar/SearchBar"
import Filters from "../10Filters/Filters";


const NavBar = () => {
return (
    <div className={styles.bodynav}>
        <div className={styles.link}>
            <nav>

            <Link to="/">
                <button>LANDING</button>
            </Link>

            {/* <Link to="/home">
                <button>HOME</button>
            </Link> */}

            {/* <Link to="/about">
                <button>ABOUT</button>
            </Link> */}


            <Link to="/create">
                <button>CREATE</button>
            </Link>
           
            </nav>
        </div>
        
        <SearchBar></SearchBar>
        <Filters />


    </div>
)
}

export default NavBar;