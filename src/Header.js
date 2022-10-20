import React from "react";
import { useNavigate } from "react-router-dom";

import './css/Header.css';
import './css/Center.css';

import './font/VeganStyle.ttf';

function Header() {
    const navigate = useNavigate()
    return (
        <div className="center header" onClick={() => navigate("/")}>
            <div className="center text">
                <h1>Newstreet Customs</h1>
            </div>
        </div>
    );
}

export default Header;
