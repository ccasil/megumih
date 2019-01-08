import React, { Component } from 'react';

import "../css/Resume.css";

import resumepic from '../../images/RESUME_megumihiramoto.PNG';
import resumepdf from '../../images/RESUME_megumihiramoto.pdf';

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
                <div className="container">
                    <a href={resumepdf} target="_blank" rel="noopener noreferrer"><img className="img-fluid outline" src={resumepic} style={{ width: "75%" }} alt="" /></a>
                </div>
            </div>
        );
    }
}

export default Resume;
