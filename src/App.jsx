import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import About from "./components/About";
import MessageMe from "./components/MessageMe";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dark mode handling
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


 

  return (
    <div
      dir="rtl"
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? "dark:bg-gray-900 dark:text-white" : "bg-white"
      }`}
    >
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo + Name */}
            <div className="flex items-center gap-2">
              <a href="#home" className="flex items-center gap-2">
                <img
                  src="/images/logo.jpeg"
                  alt="My Logo"
                  className="h-12 w-12 rounded-full border-2 border-blue-600 dark:border-blue-400 object-cover"
                />
                <span className="text-2xl font-bold dark:text-white">
                  תום כהן
                </span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <div className="hidden md:flex items-center gap-6">
                <a
                  href="#home"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  בית
                </a>
                <a
                  href="#about"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  עליי
                </a>
                <a
                  href="#skills"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  יכולות
                </a>
                <a
                  href="#projects"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  פרויקטים
                </a>
                <a
                  href="#contact"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  צור קשר
                </a>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a
                href="#home"
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                בית
              </a>
              <a
                href="#about"
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                עליי
              </a>
              <a
                href="#skills"
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                יכולות
              </a>
              <a
                href="#projects"
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                פרוייקטים
              </a>
              <a
                href="#contact"
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                צור קשר
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <ContactUs />
      </main>
      <Footer />
      <MessageMe />
    </div>
  );
}
export default App;

