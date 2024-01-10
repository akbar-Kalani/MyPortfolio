import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const phrases = [' I love programming!', 'Freelancer', 'Developer!'];
  const typingDelay = 100; // Delay between each character typing
  const erasingDelay = 50; // Delay between each character erasing
  const newTextDelay = 2000; // Delay before typing the next phrase

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;

    const type = () => {
      const currentPhrase = phrases[currentIndex];
      currentText = isDeleting
        ? currentPhrase.substring(0, currentText.length - 1)
        : currentPhrase.substring(0, currentText.length + 1);

      setText(currentText);

      if (!isDeleting && currentText === currentPhrase) {
        // Pause before erasing the phrase
        setTimeout(() => {
          isDeleting = true;
        }, newTextDelay);
      }

      if (isDeleting && currentText === '') {
        // Move to the next phrase
        isDeleting = false;
        currentIndex = (currentIndex + 1) % phrases.length;

        // Pause before typing the next phrase
        setTimeout(() => {
          isDeleting = false;
        }, typingDelay);
      }

      // Continue typing or erasing
      const delay = isDeleting ? erasingDelay : typingDelay;
      setTimeout(type, delay);
    };

    // Start the typing animation
    setTimeout(type, newTextDelay);
  }, []);

  return (
    <div>
      <h4> I am Passionate <span className="ityped text-success">{text}</span></h4>
      
    </div>
  );
};

export default TypingAnimation;