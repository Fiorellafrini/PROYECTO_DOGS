import { Link } from "react-router-dom";
import video1 from "../13Extras/video1.mp4";
import styles from "../4LandingPage/LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.bodyLanding}>
      <div className={styles.title1}>
        <h1>Welcome</h1>
      </div>

      <div className={styles.title2}>to the Dog App!</div>

      <div className={styles.button}>
        <Link to="/home">
          <button>HOME</button>
        </Link>

        <Link to="/about">
          <button>ABOUT</button>
        </Link>
      </div>

      <h2 className={styles.yellow}>
        Developed by
        <a
          className={styles.letras}
          href="https://www.linkedin.com/in/fiorella-frini-697442a7/"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Fiorella Frini&nbsp;
        </a>
        with <span className={styles.red}>❤</span>
      </h2>

      <video autoPlay muted loop className={styles.video}>
        <source src={video1} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default LandingPage;
