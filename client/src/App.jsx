import React from 'react';
import VideoDetection from './components/VideoDetection';
import AudioDetection from './components/AudioDetection';
import { FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50">
      <header className="py-6 bg-white text-blue-900 text-center shadow-md">
        <h1 className="text-4xl font-bold">
          Deepfake Detection
        </h1>
      </header>
      
      <main className="flex-grow flex justify-center items-center p-6">
        <div className="w-full max-w-screen-xl">
          <div className="flex gap-6">
            <div className="flex-1 min-w-[300px]">
              <VideoDetection />
            </div>
            <div className="flex-1 min-w-[300px]">
              <AudioDetection />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-4 bg-white text-blue-900 text-center shadow-md">
        <a 
          href="https://github.com/vennnxyz/sih2024.git" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex justify-center items-center text-blue-900"
        >
          <FaGithub className="text-blue-900 text-2xl mr-2" />
          <span>View on GitHub</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
