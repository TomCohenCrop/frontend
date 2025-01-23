import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Moon,
  Sun,
  Linkedin,
  Github,
  Phone,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

import {
  SiPython,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiRailway
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

import submitForm from './functions/submitForm';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = [
    {
      name: 'Python',
      icon: <SiPython className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'React',
      icon: <SiReact className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'HTML5',
      icon: <SiHtml5 className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'CSS3',
      icon: <SiCss3 className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'Docker',
      icon: <SiDocker className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'Git',
      icon: <SiGit className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'Railway',
      icon: <SiRailway className="text-4xl text-blue-600 dark:text-blue-400" />
    },
    {
      name: 'AWS',
      icon: <FaAws className="text-4xl text-blue-600 dark:text-blue-400" />
    }
  ];

  const projects = [
    {
      title: 'Arococo',
      description: 'Build and maintain a website for a successful interior design.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60',
      link: 'https://a-rococo.com/'
    },
    {
      title: 'ChaTrip',
      description: 'Developing an AI tourist guide application.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=60',
      link: 'https://chatrip-frontend-production.up.railway.app/login'
    }
  ];

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

    // Call the submitForm function, passing all necessary arguments
    await submitForm(formData, setStatus, setFormData, setIsSubmitting);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white'
      }`}
    >
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold dark:text-white">
              Eyal Yehiely
            </a>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <div className="hidden md:flex items-center gap-6">
                <a
                  href="#home"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </a>
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
              <a
                href="#home"
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </a>
              <a
                href="#about"
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                About
              </a>
              <a
                href="#skills"
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="text-blue-600 dark:text-blue-400">Eyal</span>
                  <br />
                  Fullstack Developer
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Passionate about creating beautiful and functional web applications
                </p>
                <div className="flex gap-4">
                  <a
                    href="#contact"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Contact Me
                  </a>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/eyal-yehiely-a074412b4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/eyalyehiely/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto overflow-hidden rounded-full border-4 border-blue-600 dark:border-blue-400">
                  <img
                    src="/src/images/eyal.JPG"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              <p>
                I am a dedicated professional known for my loyalty and strong sense
                of responsibility. Passionate about my work, I am constantly
                striving for improvement. With a proactive mindset and a robust
                work ethic, I consistently deliver results and thrive as a
                dependable team player.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>

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
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === 'success'
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
                    placeholder="Your Name"
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
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
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
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold mb-4">Schedule a Meeting</h3>
                <a
                  href="https://calendly.com/eyalwork0/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Book a Time with Me!
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Eyal Yehiely</h2>
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
                <Github className="w-6 h-6" />
              </a>
              <a
                href="tel:+972548339441"
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