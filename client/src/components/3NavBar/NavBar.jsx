import React from "react";
import { Link } from "react-router-dom";
import styles from "../3NavBar/NavBar.module.css";
// import Searchbar from "../10-Searchbar/Searchbar"


const NavBar = () => {
return (
    <div className={styles.bodynav}>
        <div className={styles.link}>
            <nav>

            <Link to="/">
                <button>LANDING</button>
            </Link>

            <Link to="/home">
                <button>HOME</button>
            </Link>

            <Link to="/about">
                <button>ABOUT</button>
            </Link>


            <Link to="/create">
                <button>CREATE</button>
            </Link>
           
            </nav>
        </div>
        
        {/* <Searchbar></Searchbar> */}

    </div>
)
}

export default NavBar;