import React, { Component } from 'react';

import stylepic3 from '../../images/styling/3.JPG';
import stylepic4 from '../../images/styling/4.JPG';
import stylepic5 from '../../images/styling/5.JPG';
import stylepic6 from '../../images/styling/6.JPG';
import stylepic7 from '../../images/styling/7.JPG';
import stylepic8 from '../../images/styling/8.JPG';
import stylepic9 from '../../images/styling/9.JPG';
// import stylepage1 from '../../images/styling/Styling1.png';

class Styling1 extends Component {
    render() {
        return (
            <div className="container">

                <h1 className="bluefont display-1 text-center">MODERN CELEBRATION</h1>

                <div className="row d-flex align-items-center h-100">
                    <img className="img-fluid" src={stylepic5} style={{ width: "55%" }} alt="" />
                        <div className="col">
                            <p className="text-center">Photographer: Votaton Siriyakul</p>
                            <p className="text-center">Stylist: Theerapon Angsupanich</p>
                            <p className="text-center">Model: Paris Hu</p>
                            <p className="text-center">Artistic Director: Megumi Hiramoto</p>
                        </div>
                </div>

                {/* <img className="" src={stylepage1} style={{ width: "100%" }} alt="" /> */}
                <div className="row d-flex align-items-center h-100">
                    <div className="col">
                        <p className="text-center spacer">Let’s mix cultures, styles and traditions. This editorial features the essence of beautiful Japanese traditional clothing Kimono with youthfulness and street-style. The contrast between the beauty of Kimono and casual clothing and the background of the Mission District in San Francisco create a sense of melted cultures and styles.</p>
                        <img className="img-fluid" src={stylepic3} style={{ width: "100%" }} alt="" />
                    </div>
                    <img className="img-fluid col" src={stylepic4} style={{ width: "50%" }} alt="" />
                </div>
                <div className="row d-flex align-items-center h-100">
                    <img className="img-fluid col" src={stylepic6} style={{ width: "50%" }} alt="" />
                    <img className="img-fluid col" src={stylepic7} style={{ width: "50%" }} alt="" />
                </div>
                <div className="row d-flex align-items-center h-100">
                    <img className="img-fluid col" src={stylepic8} style={{ width: "50%" }} alt="" />
                    <img className="img-fluid col" src={stylepic9} style={{ width: "50%" }} alt="" />
                </div>
            </div>
        );
    }
}

export default Styling1;
