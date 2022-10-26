import React from "react";

import ImgViewer from "./ImageViewer.js";
import images from './Images.js';

import unknown from './Images/Inside-Images/Unknown/17.png';

import './css/Center.css';

const unknown_images = images[2];

function Unknown(){
    return(
        <div>
            <div className="center">
                <img src={unknown} height={450} alt={"Image not loaded ..."}/>
            </div>
            <br/>
            <ImgViewer images={unknown_images} model={"unknown"}/>
        </div>
    );
}

export default Unknown;
