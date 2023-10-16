// GalleryPage.js
import React from 'react';
import Gallery from './Gallery';
import './GalleryPage.css'; // Create a CSS file for styling

function GalleryPage() {
  const images = [
    '/img/images/pic1.jpg', // Replace with your image URLs
    '/img/images/pic2.jpeg',
    '/img/images/pic3.jpeg',
    '/img/images/pic4.jpeg',
    '/img/images/pic5.jpeg',
    '/img/images/pic6.jpg',
    '/img/images/pic7.jpg',
    '/img/images/pic8.jpg',
    '/img/images/pic3.jpeg',
    '/img/images/pic4.jpeg',

  ];

  return (
    <div id= 'GalleryPage'>
      <div className="gallery-page">
        <h1>Gallery Page</h1>
        <Gallery images={images} />
      </div>
    </div>
  );
}

export default GalleryPage;
