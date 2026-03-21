import React from 'react';
import { Carousel } from 'antd';
import '../../Styles/MainSlider.css';

const MainSlider = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1599643478524-fb66f83ab4aa?q=80&w=2000&auto=format&fit=crop",
      title: "Timeless Elegance",
      subtitle: "Discover our exclusive bridal collection",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop",
      title: "Pure Heritage",
      subtitle: "Crafted with perfection and tradition",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515562141207-7a8ea3f06533?q=80&w=2000&auto=format&fit=crop",
      title: "Diamond Radiance",
      subtitle: "Shine brighter with our conflict-free diamonds",
    }
  ];

  return (
    <div className="hero-slider-container">
      <Carousel autoplay effect="fade" autoplaySpeed={5000}>
        {slides.map(slide => (
          <div key={slide.id}>
            <div 
              className="hero-slide" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                  <button className="hero-btn">Explore Collection</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainSlider;