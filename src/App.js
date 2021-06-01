import "./App.css";
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home";
import About from "./components/About";
import Projects from "./components/Project/Projects";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;