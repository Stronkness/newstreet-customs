import React from "react";
import { Link } from "react-router-dom";

import chris from './saab-finished/PICT0548.JPG';

import './css/StartPagePanel.css';

function StartPagePanel(){
    return(
        <div>
            <div className="centerSpace">
                <h2>Välkommen till Newstreet Customs!</h2>
                <h3 className="smallerfont">Här hittar du alla byggen som skapats av Chris Frisk från hans tidigare år när det byggdes bilar.
                    <br/>
                    Denna sida kommer att agera som en samling och dokumentation av byggstadiet och slutprodukten av fordonen.
                    <br/>
                    I sidopanelerna finns det diverse sidor på byggen. För att veta mer om skaparen bakom Newstreet Customs 
                    <br/>
                    klicka på länken i mitten av sidan.
                </h3>
                <br/>

                <div className="founder">
                    <Link to="/chris">
                        <img src={chris} height={250} width={250}/>
                        <br/>
                        Om Chris
                    </Link>
                </div>
            </div>        
        </div>
    );
}

export default StartPagePanel;
