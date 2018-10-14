import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/Home.css";

import header from '../../images/Header.JPG';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <img className="img-fluid" src={header} style={{ marginBottom: -200 }} alt="" />
                <Link className="nav-link left" to="/magazine"><div className="redcolor box">
                    Magazine
                </div></Link>
                <Link className="nav-link right" to="/blog"><div className="yellowcolor box">
                    Blog
                </div></Link>
                <Link className="nav-link left" to="/styling"><div className="bluecolor box">
                    Styling
                </div></Link>
                <Link className="nav-link right" to="/documentary"><div className="redcolor box">
                    Documentary
                </div></Link>
                <Link className="nav-link left" to="/about"><div className="yellowcolor box">
                    About
                </div></Link>
                <Link className="nav-link right" to="/resume"><div className="bluecolor box">
                    Resume
                </div></Link>
            </div>
        );
    }
}

export default Home;
