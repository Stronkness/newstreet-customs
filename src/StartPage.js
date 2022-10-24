import React from "react";
import { Link } from "react-router-dom";

import './css/App.css';
import './css/BlackBarPanel.css';
import './css/StartPagePanelCars.css';
import './css/Center.css';

import saab93 from './Images/Inside-Images/Saab/saab-finished/PICT0560.JPG';
import amator from './Images/Inside-Images/Amator/profilbild.png';
import unknown from './Images/Inside-Images/Unknown/17.png';
import articles from './Images/temporary.png';

function StartPage(){
    return(
        <div>            
            <div className="blackbarpanel left-panel">
                <div className="paneltextalignment topcar left">
                    <Link to="/saab93-limousine">
                        <img src={saab93} height={250} width={350}/>
                        <br/>
                        Saab 93 Limousine
                    </Link>
                </div>

                <div className="paneltextalignment bottomcar left">
                    <Link to="/amator-300-plus">
                        <img src={amator} height={250} width={350}/>
                        <br/>
                        Amatör 300+
                    </Link>  
                </div>             
            </div>

            <div className="paneltextalignment blackbarpanel right-panel">
                <div className="topcar right">
                    <Link to="/unknown">
                        <img src={unknown} height={250} width={350}/>
                        <br/>
                        Okänd bil
                    </Link> 
                </div>

                <div className="paneltextalignment bottomcar right">
                <Link to="/articles">
                        <img src={articles} height={250} width={350}/>
                        <br/>
                        Artiklar
                    </Link> 
                </div>
            </div>

        </div>
    );
}

export default StartPage;
