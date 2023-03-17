import AllCards from "../8AllCards/AllCards";
import React from "react";
import styles from "../1Home/Home.module.css"


const Home = () => {
    return(
        <div className={styles.body}>
            <AllCards></AllCards>
        </div>
    )
}

export default Home;