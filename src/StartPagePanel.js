import React from "react";

import './css/StartPagePanel.css';

function StartPagePanel(){
    return(
        <div>
            <div className="centerSpace">
                <h2>Välkommen till Newstreet Customs!</h2>
                <h3>Här hittar du alla byggen som skapats av Chris Frisk från hans tidigare år när det byggdes bilar.
                    <br/>
                    Denna sida kommer att agera som en samling och dokumentation av byggstadiet och slutprodukten av fordonen.
                    <br/>
                    I sidopanelerna finns det diverse sidor på byggen. För att veta mer om skaparen bakom Newstreet Customs klicka på länken i mitten av sidan.
                </h3>
            </div>        
        </div>
    );
}

export default StartPagePanel;
