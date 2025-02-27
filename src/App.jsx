import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Moon,
  Sun,
  Phone,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import ReactPlayer from 'react-player';
import { SiAdobephotoshop } from "react-icons/si";
import {
  SiFigma,
  SiAdobe,
  SiAdobeillustrator,
  SiDavinciresolve,
  SiCinema4D,
  SiAdobeaftereffects
} from 'react-icons/si';

import submitForm from './functions/submitForm';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null); // inline video

  // Dark mode handling
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Skills data
  const skills = [
    {
      name: 'After effects',
      icon: <SiAdobeaftereffects className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'Premiere',
      icon: <SiAdobe className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'Photoshop',
      icon: <SiAdobephotoshop className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'Illustrator',
      icon: <SiAdobeillustrator className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'DaVinci Resolve',
      icon: <SiDavinciresolve className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'Figma',
      icon: <SiFigma className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'Cinema 4D',
      icon: <SiCinema4D className="text-4xl text-blue-600 dark:text-blue-400" />
    },
  ];

  // Projects data
  const projects = [
    {
      title: "כאן 11",
      description: "לילה כיום יאיר",
      videoUrl: "https://youtu.be/VYox99w7LVM?si=rHi1RFCZesuldy9h"
    },
    {
      title: "Westarp israel done",
      description: "Another cool project",
      videoUrl: "https://youtu.be/ph214eLBvUQ?si=yB8z9Hn-TrAriUbR"
    },
    {
      title: "Keepy",
      description: "Another cool project",
      videoUrl: "https://youtu.be/BrqreihGFRo?si=h_zs5TK8E2ZQtMCd"
    },
    {
      title: "Crop logo",
      description: "Another cool project",
      videoUrl: "https://youtu.be/gRW0k7iu-FU?si=szbD9qiIzOLvbLC9"
    },
    {
      title: "Lynxight",
      description: "Another cool project",
      videoUrl: "https://youtu.be/MvBL6hb-la0?si=dpSq9UOyYtec2AKk"
    },
    {
      title: "המפקדת",
      description: "תיקון צבע",
      videoUrl: "https://youtu.be/7_RikziXxeM?si=ixlvXuTb1-8H-WKz",
    },
    {
      title: "Crop Showreel",
      description: "",
      videoUrl: "https://youtu.be/tQCOBKm2Wqg?si=btKOrlDyBErvyLhB",
    },
    {
      title: "Nevvon",
      description: "",
      videoUrl: "https://youtu.be/wvL2oj-k6uw?si=FihYyamzGuuCTgO0",
    },
    {
      title: "App Commercial",
      description: "",
      videoUrl: "https://youtu.be/eGMcEymauW8?si=aDrh6cZvjQe-2QSp",
    },
  ];

  // Pagination
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    setSelectedVideo(null); // reset video when changing pages
  };

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Basic validation
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      setStatus({ type: 'error', message: 'Please fix the errors' });
      setIsSubmitting(false);
      return;
    }

    await submitForm(formData, setStatus, setFormData, setIsSubmitting);
  };

  return (
    <div
      dir="rtl"
      className={`min-h-screen transition-colors duration-200 ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white'
        }`}
    >
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo + Name */}
            <div className="flex items-center gap-2">
              {/* Replace src with your actual logo file/path */}
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
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <div className="hidden md:flex items-center gap-6">
                <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">בית</a>
                <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">עליי</a>
                <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">יכולות</a>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">פרויקטים</a>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">צור קשר</a>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a href="#home" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">בית</a>
              <a href="#about" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">עליי</a>
              <a href="#skills" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">יכולות</a>
              <a href="#projects" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">פרוייקטים</a>
              <a href="#contact" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">צור קשר</a>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl font-bold leading-tight">
                  היי, אני <span className="text-blue-600 dark:text-blue-400">תום</span>
                  <br />
                  עורך וידאו
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Passionate about creating beautiful and functional web applications
                </p>
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
                  <img src="/images/Tom.jpeg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">קצת עליי</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              <p>
                היי, שמי תום כהן.
                <br />
                אפטריסט, עורך וידאו, אנימטור, קולוריסט ומעצב גרפי.
                בוגר בתי הספר Blink למקצועות הפוסט פרודקשן, מכללת מנטור וסטודיו 6B.
                מתמחה בעריכת סרטוני תדמית לבתי עסק ופרטיים, סרטוני קידום מכירות, סרטוני Infographics,
                עריכת וידאו ומצגות לאירועים ועיצוב גרפי.
                <br />
                <strong>ומה הסיפור שלכם ?</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">היכולות שלי</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 text-center"
                >
                  {skill.icon}
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">הפרוייקטים שלי</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {currentProjects.map((project) => {
                const isSelected = selectedVideo === project.videoUrl;
                return (
                  <div
                    key={project.title}
                    className="relative bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    {/* If NOT selected => show thumbnail; if selected => show video */}
                    {!isSelected ? (
                      <button
                        onClick={() => setSelectedVideo(project.videoUrl)}
                        className="group w-full text-left"
                      >
                        {/* 
                          Container with custom background color (change to your preference).
                          If you'd like a custom image or gradient, you can do:
                          className="relative bg-[url('/path/to/bg.jpg')] bg-cover bg-center h-48"
                        */}
                        <div className="relative bg-blue-200 h-48">
                          <img
                            src={`https://img.youtube.com/vi/${new URL(project.videoUrl).searchParams.get("v")
                              }/hqdefault.jpg`}
                            alt={project.title}
                            className="absolute top-0 left-0 w-full h-full object-cover 
                                       group-hover:scale-105 transition-transform duration-300 
                                       opacity-90"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                        </div>
                      </button>
                    ) : (
                      <div className="relative">
                        <div className="relative pt-[56.25%]">
                          <ReactPlayer
                            url={project.videoUrl}
                            controls
                            playing
                            width="100%"
                            height="100%"
                            style={{ position: 'absolute', top: 0, left: 0 }}
                          />
                        </div>
                        {/* Close (X) button to revert to thumbnail */}
                        <button
                          onClick={() => setSelectedVideo(null)}
                          className="absolute top-2 left-2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
                        >
                          <X size={24} />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                הבא
              </button>
              <span className="flex items-center">
                דף {currentPage} מתוך {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                הקודם
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">צרו איתי קשר !</h2>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status.message && (
                  <div
                    className={`p-4 rounded-lg ${status.type === 'success'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                      } flex items-center gap-2`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    {status.message}
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="השם שלך"
                    className="w-full px-4 py-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="דואר אלקטורני"
                    className="w-full px-4 py-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ההודעה שלך"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'שולח...' : 'שלח הודעה'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">תום כהן</h2>
            <div className="flex justify-center gap-6">
              
              <a
                href="tel:+972504083588"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;