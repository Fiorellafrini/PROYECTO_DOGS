import { Link } from "react-router-dom";
import video1 from "../13Extras/video1.mp4";
import styles from "../4LandingPage/LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.bodyLanding}>
      <div className={styles.title1}>
        <h1>Welcome</h1>
      </div>

      <div className={styles.title2}>to the Dogs Api!</div>

      {/* <div className={styles.button}>
                        <Link  to="/home" ><button>HOME</button></Link>
                        <Link to="/about" ><button>ABOUT</button></Link>
                    </div> */}

      <div className={styles.button}>
        <Link to="/home">
          <button>HOME</button>
        </Link>

        <Link to="/about">
          <button>ABOUT</button>
        </Link>
      </div>

      <video autoPlay muted loop className={styles.video}>
        <source src={video1} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default LandingPage;
