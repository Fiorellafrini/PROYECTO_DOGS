import React from "react";
import { Link } from "react-router-dom";
import Filters from "../10Filters/Filters";
import styles from "../3NavBar/NavBar.module.css";
import SearchBar from "../9SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className={styles.bodynav}>
      {/* <div className={styles.link}> */}
      <nav>
        <div className={styles.b1}>
        <Link to="/">
          <button> API DOG </button>
        </Link>
        </div>
            <div className={styles.b2}>
        <Link to="/create">
          <button>CREATE DOG</button>
        </Link>
        </div>
      </nav>
      {/* </div> */}

      <SearchBar></SearchBar>
      <Filters></Filters>
    </div>
  );
};

export default NavBar;
