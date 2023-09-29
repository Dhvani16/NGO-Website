// Gallery.js
import React from 'react';
import './Gallery.css';

function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
