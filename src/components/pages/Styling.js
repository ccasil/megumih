import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/Styling.css";

import $ from 'jquery';

import styling1 from '../../images/styling/1.JPG';
import styling2 from '../../images/styling/2.jpg';

class Styling extends Component {
    render() {
        return (
            <div>
                <script>
                    $(document).ready(function(){
                        setInterval(function () {
                            $(".styling1").fadeToggle(1300);
                            setTimeout(function () {
                                $(".styling2").fadeToggle(1300);
                            }, 1300);
                        }, 1300)}
                    );
                </script>
                <h1 className="bluefont display-1 overscreen">
                    <span className="styling1">Styling </span>
                    <span className="styling2">Styling </span>
                    <span className="styling1">Styling </span>
                    <span className="styling2">Styling </span>
                    <span className="styling1">Styling </span>
                    <span className="styling2">Styling </span>
                    <span className="styling1">Styling </span>
                    <span className="styling2">Styling </span>
                    <span className="styling1">Styling </span>
                    <span className="styling2">Styling </span>
                    <span className="styling1">Styling </span>
                    <span className="styling2">Styling </span>
                </h1>


                <div className="d-flex flex-row">

                    <figure className="figure align-top d-flex flex-column">
                        <figcaption className="text-left h2">MODERN CELEBRATION</figcaption>
                        <Link to="/styling1"><img className="img-fluid" src={styling1} style={{ width: "75%" }} alt="" /></Link>
                    </figure>
                    <figure className="figure align-top d-flex flex-column">
                        <Link to="/styling2"><img className="img-fluid" src={styling2} style={{ width: "75%" }} alt="" /></Link>
                        <figcaption className="text-right h2">FROM THE GOLDEN PAINT</figcaption>
                    </figure>
                </div>

            </div>
        );
    }
}

export default Styling;
