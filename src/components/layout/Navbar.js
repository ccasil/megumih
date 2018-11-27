import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/Navbar.css";

class Navbar extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }
        return (
            <div id="flyoutMenu"
                onMouseUp={this.props.handleMouseDown}
                className={visibility}>
                <h2 className="child"><Link to="/">HOME</Link></h2>
                <h2><Link to="/magazine">MAGAZINE</Link></h2>
                <h2><Link to="/blog">BLOG</Link></h2>
                <h2><Link to="/styling">STYLING</Link></h2>
                <h2><Link to="/documentary">DOCUMENTARY</Link></h2>
                <h2><Link to="/about">ABOUT</Link></h2>
                <h2><Link to="/resume">RESUME</Link></h2>
            </div>

// https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
        );
    }
}

export default Navbar;
