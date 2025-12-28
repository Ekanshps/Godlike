import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-logo">
          <span className="loader-text">GODLIKE</span>
          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>
        </div>
        <p className="loader-tagline">Rise Above All</p>
      </div>
      
      {/* Background Effects */}
      <div className="loader-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
