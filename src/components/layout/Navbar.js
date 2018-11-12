import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar fixed-top navbar-light text-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand mx-auto name" href="#">Megumi Hiramoto</a>
                    <div className="collapse navbar-collapse" id="navbarsExample01">
                        <ul className="navbar-nav mr-auto float-left">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/magazine">Magazine</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/styling">Styling</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/documentary">Documentary</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/resume">Resume</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Navbar;