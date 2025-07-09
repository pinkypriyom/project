import React, { useState } from 'react';
import axios from 'axios';

const Result = () => {
  const [isGenerating, setIsGenerating] = useState(true);
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);

  const handleGenerate = async () => {
    if (!inputText.trim()) {
      alert("Please enter a description to generate audio.");
      return;
    }

    setIsProcessing(true);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/tts',
        { text: inputText },
        { responseType: 'blob' }
      );

      const blob = new Blob([response.data], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      setIsGenerating(false);
    } catch (err) {
      alert("Failed to generate audio");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGenerateAnother = () => {
    setInputText('');
    setAudioUrl(null);
    setIsGenerating(true);
  };

  return (
    <div className="flex flex-col min-h-[85vh] justify-center items-center">
      {isGenerating ? (
        <div className="flex flex-col items-center w-[90%] max-w-xl mt-10">
          {/* Updated Input UI */}
          <div className="w-full bg-white border border-gray-300 rounded-xl shadow-sm flex items-center px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="w-5 h-5 mr-3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553 2.276A1 1 0 0120 13.118V16a2 2 0 01-2 2H6a2 2 0 01-2-2v-2.882a1 1 0 01.447-.842L9 10m6 0V6a3 3 0 00-6 0v4m6 0H9" />
            </svg>
            <input
              type="text"
              placeholder="Describe what you want to generate"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Generate Button */}
          <button
            type="button"
            className="mt-4 bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white"
            onClick={handleGenerate}
            disabled={isProcessing}
          >
            {isProcessing ? 'Generating...' : 'Generate'}
          </button>

          {/* Loader */}
          {isProcessing && (
            <div className="flex flex-col items-center mt-6">
              <div className="flex gap-x-2 justify-center items-center">
                <div className="w-5 h-5 bg-[#d991c2] rounded-full animate-bounce" />
                <div className="w-5 h-5 bg-[#9869b8] rounded-full animate-bounce" />
                <div className="w-5 h-5 bg-[#6756cc] rounded-full animate-bounce" />
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Image Placeholder */}
          <div className="mt-10">
            <img
              src="https://placehold.co/400x300?text=Audio+Generated"
              alt="Generated"
              className="w-80 xl:w-96 rounded-lg"
            />
          </div>

          {/* Audio Playback */}
          {audioUrl && (
            <>
              <audio controls className="mt-4">
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              <p className="mt-4 text-neutral-700">Your audio is ready!</p>

              <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10">
                <button
                  className="border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
                  onClick={handleGenerateAnother}
                >
                  Generate Another
                </button>

                <a href={audioUrl} download="speech.mp3">
                  <button className="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-14 py-3 rounded-xl border-[0px] border-slate-500 text-white font-medium group">
                    <div className="relative overflow-hidden">
                      <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                        Download
                      </p>
                      <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                        Download
                      </p>
                    </div>
                  </button>
                </a>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Result;
