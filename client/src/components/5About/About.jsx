import styles from "../5About/About.module.css";
import li from "../13Extras/li.png";
import gh from "../13Extras/gh.png";
import { Link } from "react-router-dom";
import thalita from "../13Extras/thalita.jpg";

const About = () => {
  return (
    <div className={styles.body}>
      <div>
        <div>
          {/* <img src={thalita} alt="img" className={styles.thalita}></img> */}
        </div>
      </div>
      <p className={styles.p}>
        Mi nombre es Fiorella Frini, tengo 31 años, naci en Cordoba y vivo en
        Santiago del Estero, Argentina.
        <img src={thalita} alt="img" className={styles.thalita}></img>

        <br></br>
        <br></br>

        💻Actualmente estoy apostando al mundo IT para poder cumplir mi sueño de
        viajar y conocer el mundo utilizando de puente la union de los sueños y
        la tecnologia!🌎
        <br></br>

        <br></br>
        🌳Además de la tecnología... mi pasión es la actividad física y la
        naturaleza. Soy Profesora de Educación Física. Esto me aporta un gran
        equilibrio y balance entre codear y el moverme.! Amo la naturaleza, mis
        perros, conocer lugares nuevos, el agua y el sin limite de la
        tecnologia!!!
        <br></br>
        <br></br>
           Esta Api es mi primer Proyecto creado 100% por mi! Utilizando las
        tecnologías: React, Redux, Node, Express y Sequelize.Me entusiasmo la
        tematica que me toco y di lo mejor para conseguir cada objetivo exigido
        en Henry!!!
        <br></br>
        <br></br>
        Espero estar a la altura!🚀 Muchas gracias!!!!
        <br></br>
        <br></br>Y que Disfruten mi Api Dogs 🤍
        <br></br>
        <br></br>
      </p>

      <h1 className={styles.go}>
      <br></br>

        <Link to="/home">Go Api Dogs!</Link>
      </h1>
      <br></br>
      <br></br>

      <div className={styles.social}>
        <h2>
          <a
            href="https://www.linkedin.com/in/fiorella-frini-697442a7/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={li} alt="li" />
          </a>
          <a
            href="https://github.com/Fiorellafrini"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gh} alt="gh" />
          </a>
        </h2>
      </div>

      <h2>
        Developed by
        <a
          className={styles.yellow}
          href="https://www.linkedin.com/in/fiorella-frini-697442a7/"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Fiorella Frini&nbsp;
        </a>
        with <span className={styles.red}>❤</span>
      </h2>
    </div>
  );
};

export default About;
