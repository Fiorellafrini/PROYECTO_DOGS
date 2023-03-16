import './App.css';
import { Route } from "react-router-dom"
import Home from './components/1Home/Home';
import LandingPage from "./components/4LandingPage/LandingPage"
import About from "./components/5About/About"
import Create from "./components/6Create/Create"
import Details from "./components/2Details/Details"

function App() {
  return (
    <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/dogs/:id" component={Details} />
    </div>
  );
}

export default App;
