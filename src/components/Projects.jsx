import React, { useState } from "react";
import { X } from "lucide-react";
function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const convertToEmbedUrl = (url) => {
    const videoId = url.match(
      /(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/
    );
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
  };

  // Add function to get video thumbnail
  const getVideoThumbnail = (url) => {
    const videoId = url.match(
      /(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/
    );
    if (!videoId) return null;

    // Start with the highest quality thumbnail
    return `https://img.youtube.com/vi/${videoId[1]}/maxresdefault.jpg`;
  };

  // Add this component to handle image loading with fallbacks
  const ThumbnailImage = ({ src, alt, className }) => {
    const [currentSrc, setCurrentSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
      if (!hasError) {
        setHasError(true);
        const videoId = src.match(/\/vi\/([^\/]+)\//)?.[1];
        if (videoId) {
          // Try fallback to hqdefault if maxresdefault fails
          setCurrentSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
        }
      }
    };

    return (
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        onError={handleError}
      />
    );
  };



  // Projects data
  const projects = [
    {
      title: "כאן 11",
      description: "לילה כיום יאיר",
      videoUrl: "https://youtu.be/VYox99w7LVM?si=rHi1RFCZesuldy9h",
    },
    {
      title: "Westarp israel done",
      description: "Another cool project",
      videoUrl: "https://youtu.be/ph214eLBvUQ?si=yB8z9Hn-TrAriUbR",
    },
    {
      title: "Keepy",
      description: "Another cool project",
      videoUrl: "https://youtu.be/BrqreihGFRo?si=xkvJ0yYL-KtW0Q_I",
    },
    {
      title: "Crop logo",
      description: "Another cool project",
      videoUrl: "https://youtu.be/gRW0k7iu-FU?si=szbD9qiIzOLvbLC9",
    },
    {
      title: "Lynxight",
      description: "Another cool project",
      videoUrl: "https://youtu.be/MvBL6hb-la0?si=dpSq9UOyYtec2AKk",
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
    setSelectedVideo(null);
  };
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">הפרוייקטים שלי</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project) => {
            const isSelected = selectedVideo === project.videoUrl;
            const thumbnailUrl = getVideoThumbnail(project.videoUrl);

            return (
              <div
                key={project.title}
                className="relative bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {!isSelected ? (
                  <button
                    onClick={() => setSelectedVideo(project.videoUrl)}
                    className="group w-full relative overflow-hidden rounded-lg"
                  >
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video">
                      <ThumbnailImage
                        src={thumbnailUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg
                            className="w-8 h-8 text-gray-800 ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Project info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {project.title}
                      </h3>
                      {project.description && (
                        <p className="text-gray-200 text-sm">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </button>
                ) : (
                  <div className="relative">
                    <div className="relative aspect-video">
                      <iframe
                        src={`${convertToEmbedUrl(
                          project.videoUrl
                        )}?autoplay=1&mute=1`}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full absolute top-0 left-0"
                      ></iframe>
                    </div>
                    <div className="relative aspect-video">
                      <button
                        onClick={() => setSelectedVideo(null)}
                        className="absolute top-3 left-3 z-10 p-2 bg-black bg-opacity-70 text-white rounded-full
hover:bg-opacity-90 transition-all duration-200
flex items-center justify-center shadow-md"
                      >
                        <X size={24} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

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
  );
}

export default Projects;
