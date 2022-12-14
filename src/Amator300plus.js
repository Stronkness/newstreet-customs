import React from "react";

import ImgViewer from "./ImageViewer.js";
import images from './Images.js';

import amator from './Images/Inside-Images/Amator/36.png';

import './css/Center.css';
import './css/Images.css';

const amator_images = images[1];

function Amator300Plus(){
    return(
        <div>
            <div className="center">
                <img className="amator-img" src={amator} alt={"Image not loaded ..."}/>
            </div>
            <br/>
            <div className="centered-text">
                <h4>
                    Detta fordon var deltagande vid det Svenska Mästerskapen i billjud 1997 arrangerat av Swedish Auto Sound Challenge Association.
                    <br/>
                    Fordonet kom på en hederlig 8:e plats.
                </h4>
            </div>
            <br/>
            <ImgViewer images={amator_images} model={"amator"}/>
        </div>
    );
}

export default Amator300Plus;
