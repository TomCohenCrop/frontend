import React from "react";
import ReactPlayer from "react-player";
import { X } from "lucide-react";

function VideoPlayer({ videoUrl, onClose }) {
  if (!videoUrl) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black p-3 rounded-lg shadow-lg z-50 w-72 h-44">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white text-sm font-semibold">Now Playing</span>
        <button onClick={onClose} className="text-white hover:text-gray-300">
          <X size={18} />
        </button>
      </div>
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        controls
        light={true}             // use YouTube thumbnail
        playIcon={<button>▶️</button>} // optional custom play button
      />
    </div>
  );
}

export default VideoPlayer;