import React from 'react'

const Figures = ({title , para}) => {
  return (
    <>
        <div className='text-center'>
            <p className='font-roboto text-5xl font-light leading-8 mb-2'>
                {title}
            </p>
            <div className='flex justify-center'>
                <p className='font-roboto text-lg font-light leading-6 text-center whitespace-pre-line min-h-[4.5em]'>
                    {para}
                </p>
            </div>
        </div>
    </>
  )
}

export default Figures