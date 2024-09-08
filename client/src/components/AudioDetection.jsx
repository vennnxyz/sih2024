import React, { useState } from 'react';
import { FaVolumeUp } from 'react-icons/fa';

const AudioDetection = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudioFile(URL.createObjectURL(file)); // Preview
    }
  };

  const handleAudioDetection = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Audio deepfake detection complete!');
    }, 3000);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
      <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
        <FaVolumeUp className="text-blue-600 mr-2" /> Audio Detection
      </h2>
      <p className="text-gray-700 mb-4">Upload an audio file to detect deepfake content.</p>
      <input
        type="file"
        accept="audio/*"
        onChange={handleAudioUpload}
        className="mb-4 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {audioFile && (
        <div className="mb-4">
          <audio src={audioFile} controls className="w-full rounded-lg shadow-md" />
        </div>
      )}
      <button
        onClick={handleAudioDetection}
        disabled={isLoading}
        className={`w-full bg-blue-500 text-white py-3 px-4 rounded-full transition-transform transform duration-300 hover:scale-105 ${
          isLoading ? 'bg-blue-300' : 'hover:bg-blue-600'
        }`}
      >
        {isLoading ? 'Detecting...' : 'Detect Audio'}
      </button>
    </div>
  );
};

export default AudioDetection;
