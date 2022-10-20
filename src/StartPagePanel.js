import React from "react";

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
                    I sidopanelerna finns det diverse sidor på byggen och artiklar. För att veta mer om skaparen bakom  
                    <br/>
                    Newstreet Customs klicka på länken i mitten av sidan.
                </h3>
                <br/>

                <div className="founder">
                    <img src={chris} height={250} width={300}/>
                </div>
            </div>        
        </div>
    );
}

export default StartPagePanel;
