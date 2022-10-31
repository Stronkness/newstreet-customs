import React from "react";
import { Link } from "react-router-dom";

import './css/App.css';
import './css/BlackBarPanel.css';
import './css/StartPagePanelCars.css';
import './css/Center.css';
import './css/Images.css';

import saab99 from './Images/Inside-Images/Saab/saab-finished/PICT4.JPG';
import amator from './Images/Inside-Images/Amator/36.png';
import unknown from './Images/Inside-Images/Unknown/17.png';
import articles from './Images/temporary.jpg';

function StartPage(){
    return(
        <div>            
            <div className="blackbarpanel left-panel">
                <div className="paneltextalignment topcar left">
                    <Link to="/saab93-limousine">
                        <img className="img" src={saab99}/>
                        <br/>
                        Saab 99 Limousine
                    </Link>
                </div>

                <div className="paneltextalignment bottomcar left">
                    <Link to="/amator-300-plus">
                        <img className="img" src={amator}/>
                        <br/>
                        Amatör 300+
                    </Link>  
                </div>             
            </div>

            <div className="paneltextalignment blackbarpanel right-panel">
                <div className="topcar right">
                    <Link to="/unknown">
                        <img className="img" src={unknown}/>
                        <br/>
                        Okänd bil
                    </Link> 
                </div>

                <div className="paneltextalignment bottomcar right">
                <Link to="/articles">
                        <img className="img" src={articles}/>
                        <br/>
                        Artiklar
                    </Link> 
                </div>
            </div>

        </div>
    );
}

export default StartPage;
