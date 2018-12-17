import React, { Component } from 'react';

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
                <a href={resumepdf} target="_blank"><img className="img-fluid" src={resumepic} style={{ width: "50%" }} alt="" /></a>
            </div>
        );
    }
}

export default Resume;
