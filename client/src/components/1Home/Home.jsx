import AllCards from "../8AllCards/AllCards";
import React from "react";
import styles from "../1Home/Home.module.css"
import Filters from "../10Filters/Filters";


const Home = () => {
    return(
        <div className={styles.body}>
        <Filters />

            <AllCards></AllCards>



        </div>
    )
}

export default Home;