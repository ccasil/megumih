import React, { Component } from 'react';

import $ from 'jquery';

import blogimage from '../../images/blog/blogimage.png';

class Blog extends Component {
    render() {
        return (
            <div>
                <script>
                    $(document).ready(function(){
                        setInterval(function () {
                            $(".blog1").fadeToggle(1300);
                            setTimeout(function () {
                                $(".blog2").fadeToggle(1300);
                            }, 1300);
                        }, 1300)}
                    );
                </script>
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
                </h1>
                <img className="mx-auto d-block img-fluid" src={blogimage} style={{ width: "50%" }} alt="" />
                <div className="container">
                    <p className="text-justify spacer">
                        Blog “IN-CROWD” was born from IN-CROWD magazine, which focuses on Japanese fashion, culture and art. Let’s make it more casual and accessible; the blog shares anything about new, cool, and fun Japanese fashion, culture and art.
                    </p>
                </div>
                <a className="col text-right" href="https://www.incrowdmag.com/" target="_blank" rel="noopener noreferrer">GO TO THE BLOG</a>
            </div>
        );
    }
}

export default Blog;
