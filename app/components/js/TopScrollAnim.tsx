"use client"
import React, { FC } from 'react';
import ButtonComponent from '../ui/ButtonComponent';
import { headingFont } from '../../fonts';

const TopScrollAnim: FC = () => {

  return (
    <section className={`text-center relative bg-white h-screen text-white`}>
      <div className="h-screen sticky top-0 w-full">
        <div className="overflow-hidden h-full w-full relative">
          <div className='w-full mx-auto h-full relative'>
            <div className='bg-white opacity-10 h-full w-full absolute left-0 top-0 transform will-change-transform z-[2]' />
            <div style={{ backgroundImage: `url(images/new.jpg)`}} className='w-full absolute right-0 top-0 z-0 bg-cover h-screen' />
            <div className='xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm:max-w-xl mx-auto w-full h-screen px-8 relative z-[3]'>
              <div className='relative w-full h-full z-0 flex pt-32 md:pt-40 justify-center pb-16'>
                <div className='w-full md:w-9/12 pr-8 relative'>
                  <div className='text-white'>
                    <span className='block text-sm sm:text-base md:text-xl lg:text-2xl'>Pioneer in Trekking at Eastern Region</span>
                    <h1 className={`${headingFont.className} heading-text w-full bg-clip-text text-5xl lg:text-6xl xl:text-7xl leading-none font-bold mb-4 will-change-[opacity] uppercase`}>
                      <span className='text-green-900'>Website</span> Coming Soon
                    </h1>
                    <div className='absolute bottom-0 left-0 py-8 w-full'>
                      <p className='mb-4 text-base sm:text-lg md:text-xl lg:text-2xl'>For treks, DM us at 
                        <a className='text-green-900 font-semibold' title='+97798404040309' href="https://wa.me/+97798404040309?text=Hello!%20Suggest%20me%20a%20trek%20please"> whatsapp (+97798404040309)</a> <span className='block text-green-900 font-semibold'>or <a href='tel:+97798404040309'>call us at +97798404040309</a></span></p>

                      <p className='text-2xl underline font-semibold'>
                        <a className='mr-4' href='https://www.facebook.com/trek8586'>Facebook</a>
                        <a href='https://www.instagram.com/trek8586'>Instagram</a>
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopScrollAnim;