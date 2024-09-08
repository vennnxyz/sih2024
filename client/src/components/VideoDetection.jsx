import React, { useState } from 'react';
import { FaVideo } from 'react-icons/fa';

const VideoDetection = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(URL.createObjectURL(file)); // Preview
    }
  };

  const handleVideoDetection = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Video deepfake detection complete!');
    }, 3000);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
      <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
        <FaVideo className="text-blue-600 mr-2" /> Video Detection
      </h2>
      <p className="text-gray-700 mb-4">Upload a video file to detect deepfake content.</p>
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {videoFile && (
        <div className="mb-4">
          <video src={videoFile} controls className="w-full h-auto max-h-64 rounded-lg shadow-md" />
        </div>
      )}
      <button
        onClick={handleVideoDetection}
        disabled={isLoading}
        className={`w-full bg-blue-500 text-white py-3 px-4 rounded-full transition-transform transform duration-300 hover:scale-105 ${
          isLoading ? 'bg-blue-300' : 'hover:bg-blue-600'
        }`}
      >
        {isLoading ? 'Detecting...' : 'Detect Video'}
      </button>
    </div>
  );
};

export default VideoDetection;
