import React, { useState } from 'react';
import './HorizontalCardSlider.css';

const HorizontalCardSlider = ({ cards }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition((prevPosition) =>
      Math.max(0, prevPosition - 300)
    );
  };

  const scrollRight = () => {
    const maxScroll = (cards.length - 1) * 300;
    setScrollPosition((prevPosition) =>
      Math.min(maxScroll, prevPosition + 300)
    );
  };

  return (
    <div className="horizontal-card-slider">
      <div
        className="card-slider-container"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
        }}
      >
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={`Card ${index + 1}`} />
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default HorizontalCardSlider;
