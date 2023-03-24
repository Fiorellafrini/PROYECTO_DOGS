import AllCards from "../8AllCards/AllCards";
import React from "react";
import styles from "../1Home/Home.module.css"
// import Filters from "../10Filters/Filters";
// import gif from "../13Extras/loa.gif"
// import { useState } from "react";
// import { useEffect } from "react";


const Home = () => {

    // const [loading, setLoading] = useState(true);


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setLoading(false);
    //     }, 3000); //  cantidad de tiempo que se muestre el GIF
    //     return () => clearTimeout(timer);
    //   }, []);
  

    return(

        <div className={styles.body}>
   
            
        
                {/* <Filters /> */}

                <AllCards></AllCards>

                {/* <div class="loading">
          <img src={gif} alt="Loading..." />
         </div> */}

        </div>
    )
}

export default Home;