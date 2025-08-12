import React, { useState } from 'react';

const ImageDisplay = ({ images, alt, className = '', fallback = '/images/placeholder.jpg' }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageError, setImageError] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className={`image-placeholder ${className}`}>
        <span>📷 No Image</span>
      </div>
    );
  }

  const handleImageError = () => {
    setImageError(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`image-display ${className}`}>
      {imageError ? (
        <div className="image-placeholder">
          <span>📷 Image not found</span>
        </div>
      ) : (
        <>
          <img
            src={images[currentImage]}
            alt={alt}
            onError={handleImageError}
            className="main-image"
          />
          
          {images.length > 1 && (
            <>
              <button className="image-nav prev" onClick={prevImage}>‹</button>
              <button className="image-nav next" onClick={nextImage}>›</button>
              
              <div className="image-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentImage ? 'active' : ''}`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ImageDisplay;