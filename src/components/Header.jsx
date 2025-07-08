import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/result'); // Change this to your target route
  };

  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
        <p>Best text to audio generator</p>
        <img src={assets.star_icon} alt="" />
      </div>

      <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>
        Turn text to <span className='text-blue-600'>audio</span>, in seconds.
      </h1>

      <p className='text-center max-w-xl mx-auto mt-5'>
        Unleash your creativity with AI. Turn your text into audio in seconds - just type, and watch the magic happen.
      </p>

      <button
        onClick={handleClick}
        className=' cursor-pointer  sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full  hover:bg-blue-600 transition hover:scale-105'
      >
        Generate Audio
        <img className="h-6" src={assets.star_group} alt="" />
      </button>
    </div>
  );
};

export default Header;
