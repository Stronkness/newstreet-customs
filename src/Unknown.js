import React from "react";

import ImgViewer from "./ImageViewer.js";
import images from './Images.js';

import unknown from './Images/Inside-Images/Unknown/17.png';

import './css/Center.css';
import './css/Images.css';

const unknown_images = images[2];

function Unknown(){
    return(
        <div>
            <div className="center">
                <img className="unknown-img" src={unknown} alt={"Image not loaded ..."}/>
            </div>
            <br/>
            <ImgViewer images={unknown_images} model={"unknown"}/>
        </div>
    );
}

export default Unknown;
