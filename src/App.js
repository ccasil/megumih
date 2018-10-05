import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Magazine from "./components/pages/Magazine";
import Blog from "./components/pages/Blog";
import Styling from "./components/pages/Styling";
import Documentary from "./components/pages/Documentary";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Styling1 from "./components/pages/Styling1";
import Styling2 from "./components/pages/Styling2";

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/magazine" component={Magazine} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/styling" component={Styling} />
          <Route exact path="/documentary" component={Documentary} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/styling1" component={Styling1} />
          <Route exact path="/styling2" component={Styling2} />
        </div>
      </Router>
    );
  }
}

export default App;
