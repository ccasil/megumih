import React, { Component } from 'react';

import cover from '../../images/magazine/magazinecover.png';

import $ from 'jquery';

class Magazine extends Component {
    componentDidMount() {
            $(document).ready(function(){
                setInterval(function () {
                    $(".magazine1").fadeToggle(1300);
                    setTimeout(function () {
                        $(".magazine2").fadeToggle(1300);
                    }, 1300);
                }, 1300)}
            );
    }
    render() {
        return (
            <div>
                <h1 className="redfont display-1 overscreen">
                    <span className="magazine1">MAGAZINE </span>
                    <span className="magazine2">MAGAZINE </span>
                    <span className="magazine1">MAGAZINE </span>
                    <span className="magazine2">MAGAZINE </span>
                    <span className="magazine1">MAGAZINE </span>
                    <span className="magazine2">MAGAZINE </span>
                    <span className="magazine1">MAGAZINE </span>
                    <span className="magazine2">MAGAZINE </span>
                    <span className="magazine1">MAGAZINE </span>
                    <span className="magazine2">MAGAZINE </span>
                    <span className="magazine1">MAGAZINE </span>
                    <span className="magazine2">MAGAZINE </span>
                </h1>
                <div className="container">
                    <img className="mx-auto d-block img-fluid" src={cover} style={{ width: "55%" }} alt="" />
                    <p className="text-justify spacer">
                        IN-CROWD is a magazine that digs into upcoming Japanese fashion, culture and art scene and shares new information and inspiration with people outside of Japan. When it comes to Japanese fashion, people think about Harajuku fashion or deconstruction fashion by old legends such as Yohji Yamamoto, Issey Miyake and Rei Kawakubo. Time has changed; there are many young, fresh labels with the great expression of Japanese simplicity and quality, and there are many talents hidden inside Japan. IN-CROWD wants to be the bridge between the Japanese and Western world because they deserve more recognition internationally. That’s the spirit of IN-CROWD.
                    </p>
                </div>
                <a className="col text-right font-weight-bold" href="https://issuu.com/itsmeg.hrmt/docs/incrowd_neweditissuu" target="_blank" rel="noopener noreferrer">Read IN-CROWD on Issuu</a>
            </div>
        );
    }
}

export default Magazine;