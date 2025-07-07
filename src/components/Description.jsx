import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Audio</h1>
        <p className='text-gray-500 mb-8'>Turn written words into spoken magic</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-centerS'>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Audio Generator</h2>
                <p className='text-gray-600 mb-4'>Easily turn your words into crystal-clear audio with our free AI text to speech tool. Whether you're creating podcasts, presentations, or simply making your content more accessible, our tool converts text into natural-sounding audio in seconds. Just type your message, click play, and let your words come to life.</p>
                <p className='text-gray-600'>Simply type your message, and our cutting-edge AI will instantly convert it into smooth, clear speech. From educational content to creative projects, your words will come alive with professional-grade audio output. Powered by advanced AI technology, the possibilities to express your ideas are limitless!</p>
            </div>
        </div>
    </div>
  )
}

export default Description