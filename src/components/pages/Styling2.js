import React, { Component } from 'react';

import styling2 from '../../images/styling/2.jpg';
import styling10 from '../../images/styling/10.jpg';
import styling11 from '../../images/styling/11.jpg';
import styling12 from '../../images/styling/12.jpg';
// import stylepage2 from '../../images/styling/Styling2.png';

class Styling2 extends Component {
    render() {
        return (
            <div className="">
                <h1 className="bluefont display-1 text-center">FROM THE GOLDEN PAINTS</h1>
                <div className="row">
                <div className="col">
                    <p className="text-center">Photographer: Danielle Rueda</p>
                    <p className="text-center">Stylist: Nina Yang and Megumi Hiramoto</p>
                    <p className="text-center">Model: Erica Lowry</p>
                    <p className="text-center">Hair &amp; Makeup Artist: Angela Kim</p>
                </div>
                <p className="text-center spacer col">Gustav Klimt is an Austrian symbolist painter, who is well known for his use of gold. With the inspiration from his golden paints, women around Klimt and his lifestyle, this fashion editorial expresses the power of colors and nostalgia. </p>
                </div>
                <div className="row d-flex align-items-center h-100">
                    <img className="img-fluid col" src={styling2} style={{ width: "50%" }} alt="" />
                    <img className="img-fluid col" src={styling10} style={{ width: "50%" }} alt="" />
                </div>
                <div className="row d-flex align-items-center h-100">
                    <img className="img-fluid col" src={styling11} style={{ width: "50%" }} alt="" />
                    <img className="img-fluid col" src={styling12} style={{ width: "50%" }} alt="" />
                </div>
            </div>
        );
    }
}

export default Styling2;
