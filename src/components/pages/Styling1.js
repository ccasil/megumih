import React, { Component } from 'react';

// import stylepic3 from '../../images/styling/3.JPG';
// import stylepic4 from '../../images/styling/4.JPG';
import stylepic5 from '../../images/styling/5.JPG';
// import stylepic6 from '../../images/styling/6.JPG';
// import stylepic7 from '../../images/styling/7.JPG';
// import stylepic8 from '../../images/styling/8.JPG';
// import stylepic9 from '../../images/styling/9.JPG';
import stylepic1 from '../../images/styling/Styling1.png';

class Styling1 extends Component {
    render() {
        return (
            <div className="">
                <h1 className="bluefont display-1 text-center">MODERN CELEBRATION</h1>
                <img className="img-fluid" src={stylepic5} style={{ width: "55%" }} alt="" />
                <p className="text-center">Photographer: Votaton Siriyakul</p>
                <p className="text-center">Stylist: Theerapon Angsupanich</p>
                <p className="text-center">Model: Paris Hu</p>
                <p className="text-center">Artistic Director: Megumi Hiramoto</p>
                <img className="" src={stylepic1} style={{ width: "100%" }} alt="" />
                {/* <img className="img-fluid" src={stylepic3} alt="" />
                <img className="img-fluid" src={stylepic4} alt="" />
                <img className="img-fluid" src={stylepic6} alt="" />
                <img className="img-fluid" src={stylepic7} alt="" />
                <img className="img-fluid" src={stylepic8} alt="" />
                <img className="img-fluid" src={stylepic9} alt="" /> */}
            </div>
        );
    }
}

export default Styling1;
