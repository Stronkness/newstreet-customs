import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

function exportImages(images, model){
  const list_images = [];

  for(let i = 1; i < Object.keys(images).length + 1; i++) {
      let png_string;
      
      if(model === "unknown"){
        if(i !== 18){ // End of number iteration of .png images
          png_string = i + ".png"; 
        }else {
          png_string = "skiss_1.png"
        }
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
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="100"
          key={index}
          style={{ margin: "2px" }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
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

export default ImgViewer;
