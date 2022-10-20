import React from "react";

import chris from './saab-finished/PICT0548.JPG';

import './css/StartPagePanel.css';

function StartPagePanel(){
    return(
        <div>
            <div className="centerSpace">
                <h2>Välkommen till Newstreet Customs!</h2>
                <h3 className="smallerfont">
                    Här hittar du alla dokumenterade byggen som skapats av Chris Frisk från hans tidigare år när det byggdes bilar.
                    <br/>
                    Denna sida kommer att agera som en samling och dokumentation av byggstadiet och slutprodukten av fordonen.
                    <br/>
                    I sidopanelerna finns det diverse sidor på byggen och artiklar. 
                    <br/>
                    <br/>
                    Chris började i tidig ålder att bygga och konstruera om mopeder. När körkortet var taget och
                    <br/>
                    bilintresset blev allt högre började Chris med att bygga om bilar och skapa nya fräsiga åk.
                    <br/>
                    som finns på denna sidan.

                    <br/>
                    <br/>
                    Chris har även varit i ledningen för Team Nasty och har agerat som ledamot för gruppen.
                    <br/>
                    Team Nasty etablerade sig av ett kompisgäng i Österlen där de visade stort intrese för fräsiga åk och
                    <br/>
                    höga decibel på högtalarna. De anordnade tävlingar och uppvisningar på Österlen och lockade intresset
                    <br/>
                    för billjud hos både äldre och unga. Idag ligger Team Nasty på is men intresset för bilar och billjud
                    <br/>
                    finns än idag bland de gamla medlemmarna.
                </h3>
                <br/>
                <br/>
                <br/>

                <div className="founder">
                    <img src={chris} height={250} width={300}/>
                </div>
            </div>        
        </div>
    );
}

export default StartPagePanel;
