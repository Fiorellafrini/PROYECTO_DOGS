import React from "react";
import { Link } from "react-router-dom";
import Filters from "../10Filters/Filters";
import styles from "../3NavBar/NavBar.module.css";
import SearchBar from "../9SearchBar/SearchBar";
import icon from "../13Extras/i4.png";
import icon2 from "../13Extras/i9.png";

const NavBar = () => {
  return (
    <div className={styles.bodynav}>
      <nav>
        <div className={styles.b1}>
          <Link to="/">
            <button>
              <img src={icon} alt="icon" className={styles.i1} />
              API DOG
            </button>
          </Link>
        </div>
        <div className={styles.b2}>
          <Link to="/create">
            <button>
              <img src={icon2} alt="icon" className={styles.i1} />
              CREATE DOG
            </button>
          </Link>
        </div>
      </nav>

      <SearchBar></SearchBar>
      <Filters></Filters>
    </div>
  );
};

export default NavBar;
