import React from "react";

import './css/Header.css';
import './css/Center.css';
import './css/BlackBarPanel.css';

import './font/VeganStyle.ttf';

function Header() {
    return (
        <div>
            <div className="blackbarpanel left-panel"/>
            <div className="blackbarpanel right-panel"/>
            <div className="center">
                <div className="header">
                    <h1>Newstreet Customs</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
