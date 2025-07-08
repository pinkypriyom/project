import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';

const Result = () => {
  const [isLoading, setIsLoading] = useState(true);         // Initial loader
  const [isGenerating, setIsGenerating] = useState(true);   // Shows form or result
  const [inputText, setInputText] = useState('');           // User input
  const [isProcessing, setIsProcessing] = useState(false);  // During audio generation
  const [audioUrl, setAudioUrl] = useState(null);           // Result audio URL

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

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
                  src="https://placehold.co/400x300?text=Audio+Generated"  // You can change this to any local or dynamic image
                  alt="Generated"
                  className="w-80 xl:w-96 rounded-lg"
                />
              </div>

              {audioUrl && (
                <>
                  <audio controls className="mt-4">
                    <source src={audioUrl} type="audio/mpeg" />
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
                      href={audioUrl}
                      download="speech.mp3"
                      className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'
                    >
                      Download
                    </a>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Result;
