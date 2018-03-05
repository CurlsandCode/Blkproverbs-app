import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../components/Navbar";
import Proverb from "./Proverb";
import Home from "../components/Home";
import About from "../components/About";
import Footer from "../components/Footer";
import ProverbsList from "./ProverbsList";
import ProverbForm from "./ProverbForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
			      <Route exact path="/proverbs" component={ProverbsList} />
            <Route exact path="/proverb" component={Proverb} />
			      <Route exact path="/addproverb" component={ProverbForm} />
            <Route exact path="/about" component={About} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
