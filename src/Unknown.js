import React, { useEffect } from "react";

import images from './Images.js';

import './css/Center.css'

const unknown_images = images[3];

function Unknown(){
    return(
        <div className="center">
            {console.log(Object.keys(unknown_images).length)}
            <img src={unknown_images["1.png"]} alt={"Image not loaded ..."}/>
        </div>
    );
}

export default Unknown;
