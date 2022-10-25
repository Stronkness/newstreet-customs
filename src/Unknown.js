import React from "react";
import ImgViewer from "./ImageViewer.js";

import images from './Images.js';

import './css/Center.css'

const unknown_images = images[3];

function exportImages(){
    const list_images = [];

    for(let i = 1; i < Object.keys(unknown_images).length + 1; i++) {
        let png_string;
        if(i !== 18){ // End of number iteration of .png images
            png_string = i + ".png"; 
        }else {
            png_string = "skiss_1.png"
        }
        list_images.push(unknown_images[png_string]);
    }

    return list_images;
}

function Unknown(){
    const images = exportImages();

    return(
        <div className="center">
            <ImgViewer images={images}/>
            {console.log(Object.keys(unknown_images).length)}
            <img src={images[0]} alt={"Image not loaded ..."}/>
        </div>
    );
}

export default Unknown;
