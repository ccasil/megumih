import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/Home.css";

class Home extends Component {
    render() {
        return (
            <div>
                <Link className="nav-link" to="/magazine"><div className="redcolor box">
                    Magazine
                </div></Link>
                <Link className="nav-link" to="/blog"><div className="yellowcolor box">
                    Blog
                </div></Link>
                <Link className="nav-link" to="/editorial"><div className="bluecolor box">
                    Editorial
                </div></Link>
                <Link className="nav-link" to="/documentary"><div className="redcolor box">
                    Documentary
                </div></Link>
                <Link className="nav-link" to="/about"><div className="yellowcolor box">
                    About
                </div></Link>
            </div>
        );
    }
}

export default Home;
