import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/megumihiramoto.png';

class Navbar extends Component {
    render() {
        return (
            <div>
                <Link to="/"><img className="" src={logo} style={{ height: 150 }} alt="" /></Link>
                <nav class="navbar navbar-light bg-ligh">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample01">
                        <ul class="navbar-nav mr-auto float-left">
                            {/* <li class="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li> */}
                            <li class="nav-item active">
                                <Link className="nav-link" to="/magazine">Magazine</Link>
                            </li>
                            <li class="nav-item active">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li class="nav-item active">
                                <Link className="nav-link" to="/editorial">Editorial</Link>
                            </li>
                            <li class="nav-item active">
                                <Link className="nav-link" to="/documentary">Documentary</Link>
                            </li>
                            <li class="nav-item active">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
