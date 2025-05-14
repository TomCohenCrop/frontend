import { useState, useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";

const TypewriterText = ({
  textArray,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetween = 2000,
  cursorStyle = "default", // "default", "block", "underscore", "none"
  className = "",
  naturalTyping = true,
  loop = true,
  startDelay = 0,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState("waiting"); // waiting, typing, pausing, deleting
  const [cursorVisible, setCursorVisible] = useState(true);
  const timeoutRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  // Enhanced cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  // Calculate variable typing speed for natural effect
  const getTypingDelay = useCallback(
    (char, index, text) => {
      if (!naturalTyping) return typingSpeed;

      let delay = typingSpeed;

      // Longer pauses after punctuation
      const prevChar = text[index - 1];
      if (prevChar && /[.!?]/.test(prevChar)) {
        delay += 200;
      } else if (prevChar && /[,;:]/.test(prevChar)) {
        delay += 100;
      }

      // Slight speed variations for realism
      const variation = Math.random() * 0.4 + 0.8; // 0.8x to 1.2x speed
      delay *= variation;

      // Occasional longer pauses (simulating thinking)
      if (Math.random() < 0.1) {
        delay += Math.random() * 150;
      }

      return Math.max(delay, 20); // Minimum 20ms
    },
    [naturalTyping, typingSpeed]
  );

  const getDeletingDelay = useCallback(() => {
    if (!naturalTyping) return deletingSpeed;
    const variation = Math.random() * 0.3 + 0.85;
    return deletingSpeed * variation;
  }, [naturalTyping, deletingSpeed]);

  useEffect(() => {
    if (!textArray || textArray.length === 0) return;

    const targetText = textArray[currentIndex];

    // Handle initial start delay
    if (phase === "waiting" && Date.now() - startTimeRef.current < startDelay) {
      timeoutRef.current = setTimeout(() => {
        setPhase("typing");
      }, startDelay - (Date.now() - startTimeRef.current));
      return () => clearTimeout(timeoutRef.current);
    }

    if (phase === "waiting") {
      setPhase("typing");
      return;
    }

    // Typing phase
    if (phase === "typing") {
      if (currentText.length < targetText.length) {
        const nextChar = targetText[currentText.length];
        const delay = getTypingDelay(nextChar, currentText.length, targetText);

        timeoutRef.current = setTimeout(() => {
          setCurrentText(targetText.substring(0, currentText.length + 1));
        }, delay);
      } else {
        // Finished typing current text
        if (!loop && currentIndex === textArray.length - 1) {
          // Don't continue if loop is false and we're on the last text
          return;
        }
        setPhase("pausing");
      }
    }
    // Pausing phase
    else if (phase === "pausing") {
      timeoutRef.current = setTimeout(() => {
        setPhase("deleting");
      }, delayBetween);
    }
    // Deleting phase
    else if (phase === "deleting") {
      if (currentText.length > 0) {
        const delay = getDeletingDelay();
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, delay);
      } else {
        // Finished deleting, move to next text
        const nextIndex = (currentIndex + 1) % textArray.length;
        setCurrentIndex(nextIndex);
        setPhase("typing");

        // If not looping and we've completed all texts, stop
        if (!loop && nextIndex === 0) {
          setPhase("pausing");
          return;
        }
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    currentText,
    currentIndex,
    phase,
    textArray,
    delayBetween,
    getTypingDelay,
    getDeletingDelay,
    loop,
    startDelay,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Enhanced cursor rendering with smoother animations
  const renderCursor = () => {
    if (cursorStyle === "none") return null;

    const baseClasses = "inline-block transition-all duration-100";
    const visibilityClasses = cursorVisible ? "opacity-100" : "opacity-0";

    switch (cursorStyle) {
      case "underscore":
        return (
          <span
            className={`${baseClasses} ${visibilityClasses} ml-1 h-0.5 w-3 bg-blue-600 dark:bg-blue-400 translate-y-3`}
          />
        );
      case "block":
        return (
          <span
            className={`${baseClasses} ${visibilityClasses} ml-1 h-6 w-3 bg-blue-600 dark:bg-blue-400 bg-opacity-70`}
          />
        );
      default: // "default" - vertical line
        return (
          <span
            className={`${baseClasses} ${visibilityClasses} ml-1 h-6 w-0.5 bg-blue-600 dark:bg-blue-400`}
          />
        );
    }
  };

  return (
    <div className={`inline-flex items-baseline ${className}`}>
      <span className="text-blue-600 dark:text-blue-400 font-mono">
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
  className: PropTypes.string,
  naturalTyping: PropTypes.bool,
  loop: PropTypes.bool,
  startDelay: PropTypes.number,
};

export default TypewriterText;
