import React, { useState, useEffect, useRef } from 'react';

const FloatingCarousel = ({ images, float = 'right', maxWidth = 300, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const goToIndex = (index) => setCurrentIndex(index);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [images.length, interval]);

  return (
    <figure
      className="floating-carousel"
      style={{ float, maxWidth: `${maxWidth}px` }}
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <div className="carousel-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => goToIndex(idx)}
          />
        ))}
      </div>

      <div className="carousel-track-wrapper" style={{ overflow: 'hidden' }}>
        <div
          className="carousel-track"
          style={{
            display: 'flex',
            transition: 'transform 0.6s ease-in-out',
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="floating-carousel-img"
            />
          ))}
        </div>
      </div>

      {images[currentIndex].caption && (
        <figcaption className="floating-carousel-caption">
          {images[currentIndex].caption}
        </figcaption>
      )}
    </figure>
  );
};

export default FloatingCarousel;
