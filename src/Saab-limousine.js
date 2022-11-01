import React from "react";

import ImgViewer from "./ImageViewer.js";
import images from './Images.js';

import saab93 from './Images/Inside-Images/Saab/saab-finished/PICT4.JPG';

import './css/Center.css';
import './css/Images.css';

const saab_images = images[0];

function SaabLimousine(){
    return(
        <div>
            <div className="center">
                <img className="saab-img" src={saab93} alt={"Image not loaded ..."}/>
            </div>
            <br/>
            <div className="saab">
                <h3>
                    Fakta
                </h3>
                <h4>
                    Modell: Saab 99 4-dörrars sedan <br/>
                    Årsmodell: 1980 <br/>
                    Längd: 5.97 meter <br/>
                    Förlängd: 1.47 meter <br/>
                    Motor: 2.0 liters insprutare, Automatlåda <br/>
                    Inredning: Konstskinn <br/>
                    Fälgar: Saab Turbo 85 5.5x"15" <br/>
                    Kjolpaket: Saab Airflow extended <br/>
                </h4>
                <h3>
                    Teknisk beskrivning
                </h3>
                <h4>
                    Utgångsobjekter är en framdel från en 4-dörrars Saab 99 som är kapad
                    efter B-stolpen, och en bakdel som är kapad <br/> framför B-stolpen för att behålla
                    bärigheten i stolparna.
                    <br/><br/>
                    Efter det monterades två längsgående balkar jämsides med de originala tröskelådorna
                    som svetsades fast i <br/> A-stolpen (främre innerskärmen), B-stolparna och bakre innerskärmen,
                    även här för bärigheten.
                    <br/><br/>
                    Därefter har plåtarna helt punktsvetsats i alla skarvar. Extar förstärkning har svetsats
                    inne i bilen, mellan <br/> B-stolparna, uppe vid taket och mitt på. Mellan de främre 
                    B-stolparna svetsades in en mellanvägg för framtida ruta.
                    <br/><br/>
                    Under baksätet förstärktes tvärbalken med en bockad profil och tvärjärn som svetsades
                    samman med de två <br/> längsgående balkarna.
                    <br/><br/>
                    Hatthyllan kapades ur och förstärktes med profiler för ljudanläggningen.
                    <br/><br/>
                    Växelspak och handbroms höjdes upp en bit från golvet för att passa ihop med mittkonsolen
                    som kommer i nivå <br/> med framsätena.
                    <br/><br/>
                    Styrningen är ändrad till servostyrning, då en omkonstruktion av genomgången i torpedväggen behövdes.
                    <br/><br/>
                    Motorn och hela bränslesystemet är bytt från förgasare till mekanisk insprutare.
                    <br/><br/>
                    Fram- och bakdörrarna är tagna från en Saab 900 87:a sp, hade mekaniska fönstervevar
                    men som byggdes om <br/> till elektriska fönsterhissar.
                    <br/><br/>
                    Dropplisten är tagen från en annan Saab 99 för att få den originala "looken".
                    <br/><br/>
                    Innertaket är tillverkat i tre sektioner. Till bakre tak har det skarvat ihop två innertak från
                    Saab. Därefter lades <br/> ett lager med glasgiberarmerad plast för att få en bra yta att limma fast det
                    nya taket på. Samma process gjordes <br/> med det främre taket.
                    <br/><br/>
                    Dörrsidor, mellansektionen och konsoler är eget tillverkade detaljer som till mestadels består
                    av MDF, glasfiberplast, <br/> masonit och aluminium.
                    <br/><br/>
                    Ytterbelysningen är tillverkade i plåt och är även här eget konstruerade och från egen idé.
                    Airflowkitet är plockat <br/> från Saab 99 och Saab 900. Den förlängda delen i mitten är bockad och konstrurerad
                    i aluminium.
                </h4>
            </div>
            <br/>
            <ImgViewer images={saab_images} model={"saab"}/>
        </div>
    );
}

export default SaabLimousine;
