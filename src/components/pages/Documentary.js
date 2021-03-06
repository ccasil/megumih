import React, { Component } from 'react';

import $ from 'jquery';

import docimage from '../../images/documentary/docimage.jpg';

class Documentary extends Component {
    componentDidMount() {
            $(document).ready(function(){
                setInterval(function () {
                    $(".blog1").fadeToggle(1300);
                    setTimeout(function () {
                        $(".blog2").fadeToggle(1300);
                    }, 1300);
                }, 1300)}
            );
    }
    render() {
        return (
            <div>
                <h1 className="redfont display-1 overscreen">
                    <span className="blog1">DOCUMENTARY </span>
                    <span className="blog2">DOCUMENTARY </span>
                    <span className="blog1">DOCUMENTARY </span>
                    <span className="blog2">DOCUMENTARY </span>
                    <span className="blog1">DOCUMENTARY </span>
                    <span className="blog2">DOCUMENTARY </span>
                    <span className="blog1">DOCUMENTARY </span>
                    <span className="blog2">DOCUMENTARY </span>
                </h1>
                <div className="container">
                    <div className="row d-flex align-items-center h-100">
                        <div className="col"><img className="mx-auto d-block img-fluid" src={docimage} alt="" /></div>
                        <div className="col"><p className="text-center spacer">It is not easy to settle in the States as an immigrant. Taro is a former sushi chef / restaurant owner who came to the States from Japan for his bright future. What’s his motivation? How did he achieve his dream? This is the story of one respectable man.</p></div>
                    </div>
                    <div className="embed-responsive embed-responsive-16by9 divclass spacer"><iframe src="https://player.vimeo.com/video/295454295?color=ffffff&portrait=0" className="embed-responsive-item videoclass" frameBorder="0" title="Taro" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </div>
        );
    }
}

export default Documentary;
