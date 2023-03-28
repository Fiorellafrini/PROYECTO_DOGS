import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/1Home/Home";
import LandingPage from "./components/4LandingPage/LandingPage";
import About from "./components/5About/About";
import Create from "./components/6Create/Create";
import Details from "./components/2Details/Details";
import { useLocation } from "react-router-dom";
import NavBar from "./components/3NavBar/NavBar";

function App() {
  const location = useLocation();

  return (
    <Switch>
      <div className="App">
        {location.pathname === "/home" && <NavBar />}

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/dogs/:id" component={Details} />
      </div>
    </Switch>
  );
}

export default App;
