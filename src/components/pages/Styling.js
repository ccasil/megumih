import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/Styling.css";

import $ from 'jquery';

import styling1 from '../../images/styling/1.JPG';
import styling2 from '../../images/styling/2.jpg';
import styling3 from '../../images/styling/styling3/1.jpg';

class Styling extends Component {
    componentDidMount() {
            $(document).ready(function(){
                setInterval(function () {
                    $(".styling1").fadeToggle(1300);
                    setTimeout(function () {
                        $(".styling2").fadeToggle(1300);
                    }, 1300);
                }, 1300)}
            );
    }
    render() {
        return (
            <div>
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
                {/* <div className="container">
                <div className="row">
                        <div className="col"><h1 className="text-left">MODERN CELEBRATION</h1><Link to="/styling1"><img className="img-fluid mx-auto" src={styling1} style={{ width: "75%" }} alt="" /></Link></div>
                        <div className="col"><Link to="/styling2"><img className="img-fluid mx-auto row" src={styling2} style={{ width: "75%" }} alt="" /></Link><h1 className="text-right row">FROM THE GOLDEN PAINT</h1></div>
                </div>
                </div> */}

                <div className="d-flex flex-row">

                    <figure className="figure align-top d-flex flex-column">
                        <figcaption className="text-left h2">MODERN CELEBRATION</figcaption>
                        <Link to="/styling1"><img className="img-fluid" src={styling1} style={{ width: "75%" }} alt="" /></Link>
                    </figure>
                    <figure className="figure align-top d-flex flex-column">
                        <Link to="/styling2"><img className="img-fluid" src={styling2} style={{ width: "75%" }} alt="" /></Link>
                        <figcaption className="text-right h2">FROM THE GOLDEN PAINTS</figcaption>
                    </figure>
                </div>
                <div className="d-flex flex-row">
                    <figure className="figure align-top d-flex flex-column">
                        <figcaption className="text-center h2">SAN FRANCISCO SKATE PERSPECTIVE</figcaption>
                        <Link to="/styling3"><img className="img-fluid" src={styling3} style={{ width: "65%" }} alt="" /></Link>
                    </figure>
                </div>

            </div>
        );
    }
}

export default Styling;
