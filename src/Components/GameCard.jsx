import React from 'react'

const GameCard = ({image , para}) => {
  return (
    <>
        <div className='relative'>
            <img src={image} alt="warfield" 
            className='w-full h-auto max-w-full'/>

            <p className='font-roboto text-base md:text-lg font-light leading-6 text-center mt-10"'>
                {para}
            </p>
        </div>
    </>
  )
}

export default GameCard