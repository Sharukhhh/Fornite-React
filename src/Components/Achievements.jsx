import React from 'react'
import Figures from './Figures'

const Achievements = () => {
  return (
    <>
        <div className='bg-black text-white'>
            <div className='container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40'>
                <div className='mb-8'>
                    <h1 className='font-roboto text-3xl sm:text-4xl md:text-5xl font-light leading-8 sm:leading-10 md:leading-12 text-center'>
                        Our Contributions
                    </h1>
                </div>
                <div className='max-w-7xl mx-auto mb-14'>
                    <p className='font-poppins text-pretty font-normal leading-6 text-center line-clamp-3'>
                        Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. 
                        Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    <Figures title={'5M'} para={'Daily User Engagements'}/>

                    <Figures title={'500K'} para={'Revenue Surge for a Platform'}/>

                    <Figures title={'10X'} para={'ROAS on all our marketing campaigns'}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Achievements