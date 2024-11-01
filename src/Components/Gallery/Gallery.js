import React, { useState } from 'react';
import './gallery.css';
import photos1 from './../../Assets/Images/profilePicSmall.jpg';
import photos2 from './../../Assets/Images/profilePicSmall.jpg';
import photos3 from './../../Assets/Images/profilePicSmall.jpg';
import photos4 from './../../Assets/Images/profilePicSmall.jpg';

function Gallery () 
{
  const images = [
     'https://picsum.photos/seed/picsum/200/300',
     'https://picsum.photos/seed/picsum/200/300',
     'https://picsum.photos/seed/picsum/200/300',
     'https://picsum.photos/seed/picsum/200/300'
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="gallery-section">
      <h2>Design Gallery</h2>
      <div className="gallery-container">
        <img src={images[currentIndex]} alt={images[currentIndex + 1]} className="gallery-image" />
        
      </div>
      <div className="button-container">
          <button className="gallery-button" onClick={handlePrevious}>Previous</button>
          <button className="gallery-button" onClick={handleNext}>Next</button>
        </div>
    </section>
  );
}
export default  Gallery;