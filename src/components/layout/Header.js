import React, { Component } from 'react';
import Navbar from "../layout/Navbar.js";
import MenuButton from "../layout/MenuButton.js";

import "../css/Header.css";

class Header extends Component {
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

        console.log("clicked");
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
            <div className="headerspace">
                <MenuButton handleMouseDown={this.handleMouseDown} />
                <Navbar handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible} />
                    <h1 className="fixed-top">MEGUMI HIRAMOTO</h1>
            </div>
        );
    }
}

export default Header;
