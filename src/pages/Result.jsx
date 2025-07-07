import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import Loader from '../components/Loader';

const Result = () => {
  const [isLoading, setIsLoading] = useState(true);         // Controls initial loader
  const [isGenerating, setIsGenerating] = useState(true);   // Controls generation state
  const [inputText, setInputText] = useState('');           // Stores input text
  const [isProcessing, setIsProcessing] = useState(false);  // Shows processing state during generation

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);  // Initial 3-second loader
    return () => clearTimeout(timer);
  }, []);

  const handleGenerate = () => {
    if (!inputText.trim()) {
      alert("Please enter a description to generate audio.");
      return;
    }

    setIsProcessing(true);

    // Simulate generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setIsProcessing(false);
    }, 3000);  // 3 seconds to simulate audio generation
  };

  const handleGenerateAnother = () => {
    setIsGenerating(true);
    setInputText('');
  };

  return (
    <div className="flex flex-col min-h-[90vh] justify-center items-center">

      {isLoading && <Loader />}

      {!isLoading && (
        <>
          {isGenerating ? (
            <div className='flex flex-col items-center'>
              <div className='flex w-[90%] max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
                <input
                  type="text"
                  placeholder='Describe what you want to generate'
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-gray-300'
                />
                <button
                  type='button'
                  className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'
                  onClick={handleGenerate}
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Generating...' : 'Generate'}
                </button>
              </div>

              {isProcessing && (
                <p className="text-neutral-600 mt-4">Generating your audio, please wait...</p>
              )}
            </div>
          ) : (
            <>
              <div className="mt-10">
                <img
                  src={assets.sample_img_1}
                  alt="Generated"
                  className="w-80 xl:w-96 rounded-lg"
                />
              </div>

              <audio controls className="mt-4">
                <source src={assets.sample_audio_1} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>

              <p className="mt-4 text-neutral-700">Your audio is ready!</p>

              <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10'>
                <button
                  className='border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'
                  onClick={handleGenerateAnother}
                >
                  Generate Another
                </button>
                <a
                  href={assets.sample_audio_1}
                  download
                  className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'
                >
                  Download
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
