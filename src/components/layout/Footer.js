import React, { Component } from 'react';
import "../css/Footer.css";

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <table className="text-right" style={{ height: "96px", marginLeft: "25px" }}>
                    <tbody>
                        <tr>
                            <td className="align-middle text-right">megumihiramoto01@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Footer;