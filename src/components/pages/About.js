import React, { Component } from 'react';
import "../css/About.css";

import $ from 'jquery';

import bioimage from '../../images/general/bio_image.png';

class About extends Component {
    render() {
        return (
            <div>
                <script>
                    $(document).ready(function(){
                        setInterval(function () {
                            $(".about1").fadeToggle(1300);
                            setTimeout(function () {
                                $(".about2").fadeToggle(1300);
                            }, 1300);
                        }, 1300)}
                    );
                </script>
                <h1 className="redfont display-1 overscreen">
                <span className="about1">ABOUT </span> 
                <span className="about2">ABOUT </span> 
                <span className="about1">ABOUT </span> 
                <span className="about2">ABOUT </span> 
                <span className="about1">ABOUT </span> 
                <span className="about2">ABOUT </span> 
                <span className="about1">ABOUT </span> 
                <span className="about2">ABOUT </span> 
                <span className="about1">ABOUT </span> 
                <span className="about2">ABOUT </span> 
                <span className="about1">ABOUT </span> 
                <span className="about2">ABOUT </span>
                </h1>
                <img className="mx-auto d-block" src={bioimage} style={{ height: 800 }} alt="" />
                <div className="container">
                    <p className="lead">
                        Megumi Hiramoto was born and raised in Yokohama, Japan – a beautiful port city located half an hour from Tokyo by train. 10 years of school life spent in cosmopolitan Tokyo naturally nurtured her interest and passion for fashion. As a teenager, she was into beautiful images of garments and enjoyed reading fashion articles and inspirational stories in magazines such as Vogue, Elle and Nylon. After high school, Megumi entered one of the country’s most prestigious universities, Aoyama Gakuin, where she studied International Politics and Economics. Having always been drawn to the fashion media world, her first internship experience was at ELLE Japan during her senior year. Upon graduating from college, Megumi was offered a job as a magazine assistant at Harper’s BAZAAR Japan. It was during this time that she decided to pursue her career as a fashion writer.
                    </p>
                    <p className="lead">
                        In 2016, Megumi moved to San Francisco to study fashion journalism at the Academy of Art University. During her time at the Academy, her passion for fashion journalism has grown even stronger. Inspired by the need she saw for informative articles in English about Japanese fashion, such as small but cool brands or upcoming artists, Megumi developed a concept magazine in a class, which later became her own fashion website IN-CROWD. (Her goal is to expand IN-CROWD and make it a popular publication that covers Japanese and Asian fashion and culture in English.) Currently, she is working as an editorial intern at Bob Cut, one of San Francisco’s most modern and youthful magazines.
                    </p>
                    <p className="lead">
                        Megumi will be graduating in December of 2018 with a Master’s in Fashion Journalism.  As she begins her professional career, she hopes to work as an editorial assistant for a leading fashion journal, magazine or website. She is looking forward to being part of a creative and innovative team, where she can use all of her journalistic skills and abilities.
                    </p>
                </div>
                <div className="container">
                    <div className="row">
                        <a className="col text-right" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a className="col text-left" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
