import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Magazine from "./components/pages/Magazine";
import Blog from "./components/pages/Blog";
import Editorial from "./components/pages/Editorial";
import Documentary from "./components/pages/Documentary";
import About from "./components/pages/About";

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/magazine" component={Magazine} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/editorial" component={Editorial} />
          <Route exact path="/documentary" component={Documentary} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
