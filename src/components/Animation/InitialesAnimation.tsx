import React, { useState, useEffect } from 'react';
import './InitialesAnimation.scss';

interface InitialesAnimationProps {
  onComplete: () => void;
  transitioning?: boolean;
}

const InitialesAnimation = ({
  onComplete,
  transitioning = false,
}: InitialesAnimationProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Déclencher l'animation après le chargement
    setTimeout(() => setAnimate(true), 300);
  }, []);

  const handleClick = () => {
    // Appel de la fonction parente pour gérer la transition
    onComplete();
  };

  return (
    <div
      className={`animation-container ${transitioning ? 'exit-animation' : ''}`}
      onClick={handleClick}
    >
      <div
        className={`initiales-wrapper ${animate ? 'animate' : ''} ${
          transitioning ? 'exit' : ''
        }`}
      >
        <div className="initiales-text">RR</div>
        <div
          className={`triangle-container ${animate ? 'animate' : ''} ${
            transitioning ? 'exit' : ''
          }`}
        >
          <svg width="160" height="140" viewBox="0 0 160 140">
            <defs>
              <linearGradient
                id="triangleGradient"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#1565c0" />
                <stop offset="50%" stopColor="#a77900" />
                <stop offset="100%" stopColor="#692627" />
              </linearGradient>
            </defs>
            <polygon
              points="80,10 10,130 150,130"
              fill="transparent"
              stroke="url(#triangleGradient)"
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>
      <div className={`click-text ${transitioning ? 'exit' : ''}`}>
        Cliquez pour entrer
      </div>
    </div>
  );
};

export default InitialesAnimation;
