import { Link } from "react-router-dom";
import video from "../13Extras/2.mp4"
import styles from "../4LandingPage/LandingPage.module.css"

const LandingPage = () => {
    return(
        <div>
                <div>
                    <h1>Welcome to Dogs APP</h1>

                    <button>
                    <Link to="/home">Home</Link>
                    </button>

                    <button>
                    <Link to="/about">Home</Link>
                    </button>
                </div>

            <video autoPlay muted loop className={styles.video}>
             <source src={video} type="video/mp4"></source>
            </video>
       
        </div>
    )
}

export default LandingPage; 