import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from '../../Header.JPG';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


class Navbar extends Component {

    state = {
        selected: 'home',
        expanded: false
    };

    onSelect = (selected) => {
        this.setState({ selected: selected });
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    navigate = (pathname) => () => {
        this.setState({ selected: pathname });
    };


    render() {

        const { expanded, selected } = this.state;

        return (
            <div>
                {/* <nav class="navbar navbar-light">
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
                </nav> */}


                <SideNav style={{ background: 'black', position: 'fixed' }} onSelect={this.onSelect} onToggle={this.onToggle}>
                    <SideNav.Toggle />
                    <SideNav.Nav selected={selected}>
                        <NavItem eventKey="Home">
                            <NavIcon>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><i className="fas fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} /></Link>
                                {/* <img className="d-inline mx-auto moveit" src={logo} style={{ height: 50 }} alt="" /> */}
                            </NavIcon>
                            <NavText style={{ paddingRight: 32, fontSize: '1.75em', verticalAlign: 'middle' }} title="Home">
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/"> Home </Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Magazine">
                            <NavIcon>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/magazine"><i className="fas fa-book-open" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} /></Link>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32, fontSize: '1.75em', verticalAlign: 'middle' }} title="Magazine">
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/magazine"> Magazine </Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Blog">
                            <NavIcon>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/blog"><i className="fas fa-sign-in-alt" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} /></Link>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32, fontSize: '1.75em', verticalAlign: 'middle' }} title="Blog">
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/blog"> Blog </Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Styling">
                            <NavIcon>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/styling"><i className="fas fa-user-tie" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} /></Link>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32, fontSize: '1.75em', verticalAlign: 'middle' }} title="Styling">
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/styling">Styling</Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Documentary">
                            <NavIcon>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/documentary"><i className="fas fa-tv" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} /></Link>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32, fontSize: '1.75em', verticalAlign: 'middle' }} title="Documentary">
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/documentary"> Documentary </Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="About">
                            <NavIcon>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/about"><i className="fas fa-female" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} /></Link>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32, fontSize: '1.75em', verticalAlign: 'middle' }} title="About">
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/about"> About </Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Resume">
                            <NavIcon>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/resume"><i className="fas fa-file-alt" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} /></Link>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32, fontSize: '1.75em', verticalAlign: 'middle' }} title="Resume">
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/resume"> Resume </Link>
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
        );
    }
}

export default Navbar;
