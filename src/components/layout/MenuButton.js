import React, { Component } from 'react';
import "../css/MenuButton.css";

class Menubutton extends Component {
    render() {
        return (
            <div>
                <button id="roundButton" className="fixed-top"
                    onMouseUp={this.props.handleMouseDown}></button>
            </div>
        );
    }
}

export default Menubutton;