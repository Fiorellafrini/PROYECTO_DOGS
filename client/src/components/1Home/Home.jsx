import AllCards from "../8AllCards/AllCards";
import React from "react";
import styles from "../1Home/Home.module.css";
import Paginado from "../12Paginado/Paginado";



const Home = () => {



  return (
    <div className={styles.body}>
      <AllCards></AllCards>
      <Paginado></Paginado>

    </div>
  );
};

export default Home;
