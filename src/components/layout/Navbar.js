import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from '../../images/general/Header.JPG';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }


    render() {
        return (
            <div>
                <Link to="/"><img className="d-inline mx-auto" src={logo} style={{ height: 200 }} alt="" /></Link>
                <nav class="navbar navbar-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample01">
                        <ul class="navbar-nav mr-auto float-left">
                            <li class="nav-item active">
                                <Link className="nav-link" to="/magazine">Magazine</Link>
                            </li>
                            <li class="nav-item active">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li class="nav-item active">
                                <Link className="nav-link" to="/styling">Styling</Link>
                            </li>
                            <li class="nav-item active">
                                <Link className="nav-link" to="/documentary">Documentary</Link>
                            </li>
                            <li class="nav-item active">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item active">
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
