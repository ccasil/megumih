import React, { Component } from 'react';

import top from '../../images/styling/styling3/top.jpg';
import stylepic1 from '../../images/styling/styling3/1.jpg';
import stylepic2 from '../../images/styling/styling3/2.jpg';
import stylepic3 from '../../images/styling/styling3/3.jpg';
import stylepic4 from '../../images/styling/styling3/4.jpg';
import stylepic5 from '../../images/styling/styling3/5.jpg';
import stylepic6 from '../../images/styling/styling3/6.jpg';
import stylepic7 from '../../images/styling/styling3/7.jpg';
import stylepic8 from '../../images/styling/styling3/8.jpg';

class Styling3 extends Component {
    render() {
        return (
            <div>
                <h1 className="bluefont display-1 text-center">TITLE</h1>
                <img className="img-fluid" src={top} style={{ width: "55%" }} alt="" />
                <p className="text-center">Photographer: Alexander Defiesta</p>
                <p className="text-center">Stylist: Erika Mae Martin</p>
                <p className="text-center">Model: Kosuke Fujikawa</p>
                <p className="text-center">Artistic Director: Megumi Hiramoto</p>
                <div className="row">
                    <img className="img-fluid col" src={stylepic1} style={{ width: "60%" }} alt="" />
                    <img className="img-fluid col" src={stylepic2} style={{ width: "60%" }} alt="" />
                </div>
                <img className="img-fluid" src={stylepic3} style={{ width: "60%" }} alt="" />
                <img className="img-fluid" src={stylepic4} style={{ width: "60%" }} alt="" />
                {/* <div className="row"> */}
                    <img className="img-fluid" src={stylepic5} style={{ width: "60%" }} alt="" />
                    <img className="img-fluid" src={stylepic6} style={{ width: "60%" }} alt="" />
                {/* </div> */}
                <img className="img-fluid" src={stylepic7} style={{ width: "60%" }} alt="" />
                <img className="img-fluid" src={stylepic8} style={{ width: "60%" }} alt="" />
            </div>
        );
    }
}

export default Styling3;
