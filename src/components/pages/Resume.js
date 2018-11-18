import React, { Component } from 'react';

import $ from 'jquery';

class Resume extends Component {
    componentDidMount() {
        $(document).ready(function () {
            setInterval(function () {
                $(".resume1").fadeToggle(1300);
                setTimeout(function () {
                    $(".resume2").fadeToggle(1300);
                }, 1300);
            }, 1300)
        }
        );
    }
    render() {
        return (
            <div>
                <h1 className="bluefont display-1 overscreen">
                    <span className="resume1">RESUME </span>
                    <span className="resume2">RESUME </span>
                    <span className="resume1">RESUME </span>
                    <span className="resume2">RESUME </span>
                    <span className="resume1">RESUME </span>
                    <span className="resume2">RESUME </span>
                    <span className="resume1">RESUME </span>
                    <span className="resume2">RESUME </span>
                    <span className="resume1">RESUME </span>
                    <span className="resume2">RESUME </span>
                    <span className="resume1">RESUME </span>
                    <span className="resume2">RESUME </span>
                </h1>
            </div>
        );
    }
}

export default Resume;
