import React, { useState } from "react";
import Confetti from 'react-confetti'

import chris from './Images/Inside-Images/founder.JPG';
import applause from './audience_applause.mp3'

import './css/StartPagePanel.css';

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

function StartPagePanel(){
    const [count, setCount] = useState(0);
    const [endConfetti, setEndConfetti] = useState(false);
    const audio = new Audio(applause);

    if(count >= 5){
        setCount(5);
        audio.play();
        console.log("innan wait")
        wait(6000); // Await audio-clips length
        console.log("efter wait")
        setEndConfetti(true);
        setCount(0);
    }

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
                    <img src={chris} height={300} width={350} onClick={() => setCount(count + 1)}/>
                </div>
                {
                    (count === 5 && !endConfetti) ?
                    <Confetti recycle={true} numberOfPieces={300}/> :
                    <></>
                }
            </div> 
            {console.log(count)}  
            {console.log(endConfetti)} 
        </div>
    );
}

export default StartPagePanel;
