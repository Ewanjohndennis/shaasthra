import React from 'react';
import './ScrollingBackground.css';

const ScrollingBackground = ({ word = "SHAASTHRA" }) => {
  const line = Array(20).fill(word).join(' ');
  const repeatedLines = new Array(20).fill(line);

  return (
    <div className="scrolling-wrapper">
      <div className="scrolling-background">
        {repeatedLines.map((line, index) => (
          <div key={index} className="scrolling-line">
            {line}
          </div>
        ))}
        {/* 👇 Duplicate for seamless loop */}
        {repeatedLines.map((line, index) => (
          <div key={`dup-${index}`} className="scrolling-line">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBackground;
