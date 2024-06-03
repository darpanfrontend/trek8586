"use client"
import React, { FC } from 'react';
import ButtonComponent from '../ui/ButtonComponent';
import { headingFont } from '../../fonts';

const TopScrollAnim: FC = () => {

  return (
    <section className={`text-center relative bg-white h-screen`}>
      <div className="h-screen sticky top-0 w-full">
        <div className="overflow-hidden h-full w-full relative">
          <div className='w-full px-8 mx-auto h-full relative'>
            <div className='bg-white opacity-10 h-full w-full absolute left-0 top-0 transform will-change-transform z-[2]' />
            <div style={{ backgroundImage: `url(images/portrait.jpg)`}} className='w-full absolute right-0 top-0 z-0 bg-cover h-screen'/>
            <div className='xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm:max-w-xl mx-auto w-full h-screen px-8 relative z-[3]'>
              <div className='relative w-full h-full z-0 flex items-center justify-center pb-16'>
                <div className='w-9/12 pr-8 relative'>
                  <div className='text-gray-900'>
                    <span className='block text-2xl'>Pioneer in Trekking at Eastern Region</span>
                    <h1 className={`${headingFont.className} heading-text w-full bg-clip-text text-7xl leading-none font-bold mb-4 will-change-[opacity] uppercase`}>
                      <span className='text-green-900'>Website</span> Coming Soon
                    </h1>
                    <p className='mb-12 text-3xl'>For treks, please contact us at our <a title='+97798404040309' href="https://wa.me/+97798404040309?text=Hello!%20Suggest%20me%20a%20trek%20please">whatsapp (+97798404040309) number</a> or</p>
                    <ButtonComponent href="tel:+97798404040309" tagType={"a"}>Call Us Now</ButtonComponent>
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