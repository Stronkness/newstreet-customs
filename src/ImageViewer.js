import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

import './css/ImageViewer.css';

function exportImages(images, model){
  const list_images = [];

  for(let i = 1; i < Object.keys(images).length + 1; i++) {
      let png_string;
      
      if(model === "saab"){
        if(i > 44){ // Saab-finished
          let iteration = i - 44;
          png_string = "saab-finished/PICT" + iteration + ".JPG";
        }else{
          png_string = i + ".png";
        }

      }else{
        png_string = i + ".png"; 
      }

      list_images.push(images[png_string]);
  }

  return list_images;
}


function ImgViewer(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = exportImages(props.images, props.model);

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
      <div className="grid">
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="100"
            height="100"
            key={index}
            style={{ margin: "0.5%" }}
            alt=""
          />
        ))}
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={true}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}

export default ImgViewer;
