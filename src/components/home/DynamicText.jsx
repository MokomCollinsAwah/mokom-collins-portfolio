import React, { useState, useEffect } from 'react';// Import a CSS file for styling

const DynamicText = () => {
  const words = ['FrontEnd Developer', 'Web Developer', 'Software Engineer', 'Graphics Designer','YouTuber','Software Engineering Lecturer'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Wait for 2 seconds before transitioning to the next word

    return () => clearTimeout(timeout);
  }, [wordIndex, words.length]);

  return (
    <div className="dynamic-text">
      <div className="fade-in-out">
        {words.map((word, index) => (
          <span key={index} className={index === wordIndex ? 'visible' : 'hidden'}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DynamicText;
