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
                <h1 className="bluefont display-1 text-center">FROM THE GOLDEN PAINT</h1>
                <p className="text-center">Photographer: Danielle Rueda</p>
                <p className="text-center">Stylist: Nina Yang and Megumi Hiramoto</p>
                <p className="text-center">Model: Erica Lowry</p>
                <p className="text-center">Hair &amp; Makeup Artist: Angela Kim</p>
                {/* <img className="" src={stylepage2} style={{ width: "100%" }} alt="" /> */}
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
