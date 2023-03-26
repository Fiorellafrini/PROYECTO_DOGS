import styles from "../5About/About.module.css";

const About = () => {
  return (
    <div className={styles.body}>
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
