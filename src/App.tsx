import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Moon,
  Sun,
  Linkedin,
  Facebook,
  Phone,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import VideoPlayer from "./VideoPlayer";
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
  // Add state for the currently selected video
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);



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
    // {
    //   name: 'midjourney',
    //   icon: <SiPostgresql className="text-4xl text-blue-600 dark:text-blue-400" />
    // },
    // {
    //   name: 'Runway',
    //   icon: <SiRailway className="text-4xl text-blue-600 dark:text-blue-400" />
    // },
    // {
    //   name: 'King',
    //   icon: <FaAws className="text-4xl text-blue-600 dark:text-blue-400" />
    // },
    // {
    //   name: 'Luka dream machine',
    //   icon: <FaAws className="text-4xl text-blue-600 dark:text-blue-400" />
    // }
  ];

  const projects = [
    {
      title: "Project 1",
      description: "This is my first project",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      title: "Project 2",
      description: "Another cool project",
      videoUrl: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ"
    },
    {
      title: "Project 3",
      description: "Another cool project",
      videoUrl: "https://app.frame.io/reviews/64e512f0-4d19-42ef-8b01-663a8024f5c9/afe53f54-742d-4389-aa66-abb56a6b8732"
    }
  ];

  // Inside your App component, after defining the projects array, add:
  const itemsPerPage = 2; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page changes
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

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
    <div dir='rtl'
      className={`min-h-screen transition-colors duration-200 ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white'}`}
    >
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold dark:text-white">
              תום כהן
            </a>

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
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/eyal-yehiely-a074412b4/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-600 dark:hover:text-blue-400">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/eyalyehiely/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-600 dark:hover:text-blue-400">
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
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
                <h3 className="font-bold">
                  ומה הסיפור שלכם ?
                </h3>
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
        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">הפרוייקטים שלי</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {currentProjects.map((project) => (
                <button
                  key={project.title}
                  onClick={() => setSelectedVideo(project.videoUrl)}
                  className="group"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <div className="h-48 overflow-hidden">
                      {/* YouTube Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${new URL(project.videoUrl).searchParams.get("v")}/hqdefault.jpg`}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
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
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold mb-4">קבעו איתי פגישה</h3>
                <a
                  href="https://calendly.com/eyalwork0/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  לחצו כאן !
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Video Player */}
      {selectedVideo && (
        <VideoPlayer
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">תום כהן</h2>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/eyal-yehiely-a074412b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/eyalyehiely/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Facebook className="w-6 h-6" />
              </a>
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