import React, { Component } from 'react';

import $ from 'jquery';

import blogimage from '../../images/blog/blogimage.png';

class Blog extends Component {
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
                <h1 className="yellowfont display-1 overscreen">
                    <span className="blog1">BLOG </span>
                    <span className="blog2">BLOG </span>
                    <span className="blog1">BLOG </span>
                    <span className="blog2">BLOG </span>
                    <span className="blog1">BLOG </span>
                    <span className="blog2">BLOG </span>
                    <span className="blog1">BLOG </span>
                    <span className="blog2">BLOG </span>
                    <span className="blog1">BLOG </span>
                    <span className="blog2">BLOG </span>
                    <span className="blog1">BLOG </span>
                    <span className="blog2">BLOG </span>
                    <span className="blog1">BLOG </span>
                    <span className="blog2">BLOG </span>
                </h1>
                <div className="container">
                    <img className="mx-auto d-block img-fluid" src={blogimage} style={{ }} alt="" />
                    <p className="text-justify spacer">
                        Blog “IN-CROWD” was born from IN-CROWD magazine, which focuses on Japanese fashion, culture and art. Let’s make it more casual and accessible; the blog shares anything about new, cool, and fun Japanese fashion, culture and art.
                    </p>
                </div>
                <div className="spacer">
                    <a className="col text-right font-weight-bold spacer" href="https://www.incrowdmag.com/" target="_blank" rel="noopener noreferrer">incrowdmag.com</a>
                </div>
            </div>
        );
    }
}

export default Blog;
