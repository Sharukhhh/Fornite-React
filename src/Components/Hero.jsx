import React from 'react'
import fortnite from '../assets/fortnite.png';

const Hero = () => {
  return (
    <>
        <div className='bg-black text-white'>
            <div className='container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40'>
                <div className='max-w-full mx-auto mb-8'>
                    <h1 className='text-2xl sm:text-4xl md:text-5xl font-roboto font-light leading-8 sm:leading-10 md:leading-12 text-center'>
                        Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.
                    </h1>
                </div>

                <div className='relative items-center'>
                    <img src={fortnite} alt="fortnite assemble" 
                    className='w-full h-auto max-w-full'/>
                </div>

                <div className='max-w-6xl mx-auto mt-8 opacity-80'>
                    <p className='font-poppins text-sm md:text-xl text-pretty font-normal leading-6 md:leading-7 text-center'>
                        Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, 
                        or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. 
                        Find it all in Fortnite ... Drop In.
                    </p>
                </div>

                <div className='mt-8 flex justify-center'>
                    <div className='bg-white text-black py-3 px-6 '>
                        Visit Website
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero