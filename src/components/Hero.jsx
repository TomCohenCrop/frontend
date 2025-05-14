import React from 'react'
import TypewriterText from "./TypewriterText";

function Hero() {
    // Add this array somewhere in your App component
  const animatedTexts = [
    "עורך סרטוני תדמית לבתי עסק",
    "מעצב גרפי מקצועי",
    "עורך וידאו ואנימציה",
    "אפטריסט",

  ];
  return (
    <section
          id="home"
          className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl font-bold leading-tight">
                  היי, אני{" "}
                  <span className="text-blue-600 dark:text-blue-400">תום</span>
                  <br />
                  <div className="h-14 flex items-center">
                    <TypewriterText
                      textArray={animatedTexts}
                      typingSpeed={70}
                      deletingSpeed={35}
                      delayBetween={1800}
                      cursorStyle="default"
                      className="text-5xl"
                    />
                  </div>
                </h1>

                <div className="flex gap-4">
                  <a
                    href="#contact"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    צרו איתי קשר !
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto overflow-hidden rounded-full border-4 border-blue-600 dark:border-blue-400">
                  <img
                    src="/images/Tom.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero