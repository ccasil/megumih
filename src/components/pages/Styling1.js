import React, { Component } from 'react';

import styling3 from '../../images/styling/3.JPG';
import styling4 from '../../images/styling/4.JPG';
import styling5 from '../../images/styling/5.JPG';
import styling6 from '../../images/styling/6.JPG';
import styling7 from '../../images/styling/7.JPG';
import styling8 from '../../images/styling/8.JPG';
import styling9 from '../../images/styling/9.JPG';

class Styling1 extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="bluefont display-1 text-center">MODERN CELEBRATION</h1>
                <img className="img-fluid" src={styling5} alt="" />
                <p className="text-center">Photographer: Votaton Siriyakul</p>
                <p className="text-center">Stylist: Theerapon Angsupanich</p>
                <p className="text-center">Model: Paris Hu</p>
                <p className="text-center">Artistic Director: Megumi Hiramoto</p>
                <img className="img-fluid" src={styling3} alt="" />
                <img className="img-fluid" src={styling4} alt="" />
                <img className="img-fluid" src={styling6} alt="" />
                <img className="img-fluid" src={styling7} alt="" />
                <img className="img-fluid" src={styling8} alt="" />
                <img className="img-fluid" src={styling9} alt="" />
            </div>
        );
    }
}

export default Styling1;
