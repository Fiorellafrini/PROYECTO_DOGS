import { Link } from "react-router-dom";

const LandingPage = () => {
    return(
        <div>
            <h1>Welcome to Dogs APP</h1>

            <button>
            <Link to="/home">Home</Link>
            </button>
        </div>
    )
}

export default LandingPage; 