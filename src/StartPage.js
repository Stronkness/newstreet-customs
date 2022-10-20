import React from "react";
import { Link } from "react-router-dom";

import './css/App.css';
import './css/BlackBarPanel.css';
import './css/StartPagePanelCars.css';

import saab93 from './saab-finished/PICT0546.JPG';
import test from './saab-finished/PICT0547.JPG';
import test2 from './saab-finished/PICT0549.JPG';
import test3 from './saab-finished/PICT0565.JPG';

function StartPage(){
    return(
        <div>            
            <div className="blackbarpanel left-panel">
                <div className="paneltextalignment topcar left">
                    <Link to="/saab93-limousine">
                        <img src={saab93} height={250} width={300}/>
                        <br/>
                        Saab 93 Limousine
                    </Link>
                </div>

                <div className="paneltextalignment bottomcar left">
                    <Link to="/amator-300-plus">
                        <img src={test} height={250} width={300}/>
                        <br/>
                        Amatör 300+
                    </Link>  
                </div>             
            </div>

            <div className="paneltextalignment blackbarpanel right-panel">
                <div className="topcar right">
                    <Link to="/unknown">
                        <img src={test2} height={250} width={300}/>
                        <br/>
                        Okänd bil
                    </Link> 
                </div>

                <div className="paneltextalignment bottomcar right">
                <Link to="/articles">
                        <img src={test3} height={250} width={300}/>
                        <br/>
                        Artiklar
                    </Link> 
                </div>
            </div>

        </div>
    );
}

export default StartPage;
