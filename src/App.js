import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar.js";
import MenuButton from "./components/layout/MenuButton.js";
import Home from "./components/layout/Home";
import Magazine from "./components/pages/Magazine";
import Blog from "./components/pages/Blog";
import Styling from "./components/pages/Styling";
import Documentary from "./components/pages/Documentary";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Styling1 from "./components/pages/Styling1";
import Styling2 from "./components/pages/Styling2";
import Styling3 from "./components/pages/Styling3";
import Footer from "./components/layout/Footer";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <Header />
          <MenuButton handleMouseDown={this.handleMouseDown} />
          <Navbar handleMouseDown={this.handleMouseDown}
            menuVisibility={this.state.visible} />
          <div className="container-fluid">
            <Route exact path="/" component={Home} />
            <Route exact path="/magazine" component={Magazine} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/documentary" component={Documentary} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <div className="container">
              <Route exact path="/styling" component={Styling} />
              <Route exact path="/styling1" component={Styling1} />
              <Route exact path="/styling2" component={Styling2} />
              <Route exact path="/styling3" component={Styling3} />
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
