import React from "react";

import ImgViewer from "./ImageViewer.js";
import images from './Images.js';

import saab93 from './Images/Inside-Images/Saab/saab-finished/PICT4.JPG';

import './css/Center.css';

const saab_images = images[0];

function SaabLimousine(){
    return(
        <div>
            <div className="center">
                <img src={saab93} height={450} alt={"Image not loaded ..."}/>
            </div>
            <br/>
            <ImgViewer images={saab_images} model={"saab"}/>
        </div>
    );
}

export default SaabLimousine;
