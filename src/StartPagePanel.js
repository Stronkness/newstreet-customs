import React, { useState } from "react";
import Confetti from 'react-confetti'

import applause from './sound/audience_applause.mp3';

import './css/StartPagePanel.css';

function StartPagePanel(){
    const [count, setCount] = useState(0);
    const [endConfetti, setEndConfetti] = useState(false);
    const audio = new Audio(applause);

    if(count === 5){
        audio.play();
        setTimeout(() => {setEndConfetti(true)}, 6000);
        setTimeout(() => {setCount(0)}, 6000);
    }else if(count > 5){
        audio.pause();
        audio.currentTime = 0;
        setTimeout(() => {setEndConfetti(false)}, 6000);
    }

    return(
        <div className="no-scroll">
            <div className="centerSpace">
                <h1 className="biggerfont min-height">Välkommen till Newstreet Customs!</h1>
                <h2 className="smallerfont">
                    Här hittar du alla dokumenterade byggen som skapats av Chris från hans tidigare år när det byggdes bilar.
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
                    Chris har även varit i ledningen för <i onClick={() => setCount(count + 1)}>Team Nasty</i> och har agerat som ledamot för gruppen.
                    <br/>
                    <i onClick={() => setCount(count + 1)}>Team Nasty</i> etablerade sig av ett kompisgäng i Österlen där de visade stort intrese för fräsiga åk och
                    <br/>
                    höga decibel på högtalarna. De anordnade tävlingar och uppvisningar på Österlen och lockade intresset
                    <br/>
                    för billjud hos både äldre och unga. Idag ligger <i onClick={() => setCount(count + 1)}>Team Nasty</i> på is men intresset för bilar och billjud
                    <br/>
                    finns än idag bland de gamla medlemmarna.
                </h2>
                <br/>
                <br/>
                <br/>

                {
                    (count === 5 && !endConfetti) ?
                    <Confetti recycle={true} numberOfPieces={700}/> :
                    <Confetti recycle={false} numberOfPieces={0}/>
                }
            </div> 
        </div>
    );
}

export default StartPagePanel;
