import React from "react";

import ImgViewer from "./ImageViewer.js";
import images from './Images.js';

import amator from './Images/Inside-Images/Amator/36.png';

import './css/Center.css';

const amator_images = images[2];

function Amator300Plus(){
    return(
        <div>
            <div className="center">
                <img src={amator} height={400} alt={"Image not loaded ..."}/>
            </div>
            <br/>
            <ImgViewer images={amator_images} model={"amator"}/>
        </div>
    );
}

export default Amator300Plus;
