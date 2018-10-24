import React, { Component } from 'react';

import $ from 'jquery';

import docimage from '../../images/documentary/docimage.jpg';
// import docvid from '../../images/documentary/RumbleFishDocumentary.mp4';

class Documentary extends Component {
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
                <h1 className="bluefont display-1 overscreen">
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
                    <div className="row">
                        <div className="col"><img className="mx-auto d-block img-fluid" src={docimage} alt="" /></div>
                        <div className="col"><p className="lead">It is not easy to settle in the States as an immigrant. Taro is a former sushi chef/restaurant owner who came to the States from Japan for his bright future. What’s his motivation? How did he achieve his dream? This is the story of one respectable man.</p></div>
                    </div>
                    <div className="embed-responsive embed-responsive-4by3 container videodoc">
                        {/* <iframe className="" src={docvid} title="Rumble Fish" allowFullScreen></iframe> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Documentary;
