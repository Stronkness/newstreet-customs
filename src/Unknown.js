import React, { useState, useCallback } from "react";
// import ImgViewer from "./ImageViewer.js";

import ImageViewer from "react-simple-image-viewer";


import images from './Images.js';

import './css/Center.css'

const unknown_images = images[3];
const render_images = exportImages();

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
    console.log(list_images)
    return list_images;
}

function ImgViewer() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [];
  
    const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);
  
    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };
  
    return (
      <div>
        {render_images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="300"
            key={index}
            style={{ margin: "2px" }}
            alt=""
          />
        ))}

        {console.log(render_images)}

        {isViewerOpen && (
          <ImageViewer
            src={render_images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)"
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>
    );
  }

function Unknown(){
    const images = exportImages();

    return(
        <div className="center">
            <ImgViewer/>
            {/* <ImgViewer images={images}/> */}
            {console.log(Object.keys(unknown_images).length)}
            <img src={images[0]} alt={"Image not loaded ..."}/>
        </div>
    );
}

export default Unknown;
