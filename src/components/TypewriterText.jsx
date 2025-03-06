import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TypewriterText = ({ 
  textArray, 
  typingSpeed = 80, 
  deletingSpeed = 40, 
  delayBetween = 2000,
  cursorStyle = "default", // "default", "block", "underscore", "none"
  className = ""
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // typing, pausing, deleting
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blink cursor separately from typing animation for smoother experience
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (!textArray || textArray.length === 0) return;

    const targetText = textArray[currentIndex];
    let timeout;

    // Typing phase
    if (phase === 'typing') {
      if (currentText.length < targetText.length) {
        // Still typing
        timeout = setTimeout(() => {
          setCurrentText(targetText.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Done typing, start pause
        setPhase('pausing');
      }
    } 
    // Pausing phase
    else if (phase === 'pausing') {
      timeout = setTimeout(() => {
        setPhase('deleting');
      }, delayBetween);
    } 
    // Deleting phase
    else if (phase === 'deleting') {
      if (currentText.length > 0) {
        // Still deleting
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Done deleting, move to next text and start typing
        setCurrentIndex((currentIndex + 1) % textArray.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, phase, textArray, typingSpeed, deletingSpeed, delayBetween]);

  // Different cursor styles
  const renderCursor = () => {
    if (cursorStyle === "none") return null;
    
    const cursorClass = cursorVisible ? "opacity-100" : "opacity-0";
    
    if (cursorStyle === "underscore") {
      return <span className={`ml-1 h-1 w-5 bg-blue-600 dark:bg-blue-400 ${cursorClass} transition-opacity duration-200`}></span>;
    } else if (cursorStyle === "block") {
      return <span className={`ml-1 h-[1.2em] w-3 bg-blue-600 dark:bg-blue-400 ${cursorClass} transition-opacity duration-200`}></span>;
    } else { // default
      return <span className={`ml-1 h-[1.2em] w-[3px] bg-blue-600 dark:bg-blue-400 ${cursorClass} transition-opacity duration-200`}></span>;
    }
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="text-blue-600 dark:text-blue-400">
        {currentText}
      </span>
      {renderCursor()}
    </div>
  );
};

TypewriterText.propTypes = {
  textArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  typingSpeed: PropTypes.number,
  deletingSpeed: PropTypes.number,
  delayBetween: PropTypes.number,
  cursorStyle: PropTypes.oneOf(["default", "block", "underscore", "none"]),
  className: PropTypes.string
};

export default TypewriterText; 