import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='bg-black text-white'>
            <div className='container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40'>
                <div className='text-center mb-8'>
                    <h2 className='font-roboto text-3xl sm:text-4xl md:text-5xl font-light leading-8 sm:leading-10 md:leading-12'>
                        Interested in delving deeper into the project?
                    </h2>
                </div>

                <div className='max-w-2xl mx-auto mb-8'>
                    <p className='font-poppins text-lg font-normal leading-6 text-center'>
                        If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. 
                        You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.
                    </p>
                </div>
                
                <div className='flex flex-col sm:flex-row justify-center items-center'>
                    <button className='bg-black text-white py-3 px-6 mb-2 mr-4 border border-white sm:mb-0 sm:mr-2'>
                        Ring us on Skype
                    </button>

                    <button className='bg-white text-black py-3 px-6'>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer