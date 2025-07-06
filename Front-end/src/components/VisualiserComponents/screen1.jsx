import React, { useEffect } from 'react';
import 'remixicon/fonts/remixicon.css'
import bluye from '/Blueye.gif';
import bgVideo from '/splashVideo.mp4';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Screen1 = ({ onLoadComplete }) => {

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onLoadComplete()
    });
    tl.to(".loaderBlack", {
      height: 0,
      duration: 2,
      ease: "expo.inOut", // Corrected easing function
    });
    tl.to(".loaderOrange", {
      height: "100%",
      duration: 2,
      delay: -2,
      ease: "expo.inOut", // Corrected easing function
    });
    tl.to(".loaderMainContent", {
      height: "100vh",
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      overflow: "hidden", // Corrected easing function
    });

  }, [onLoadComplete]);

  return (
    <>
      <section className="h-screen w-screen relative">
        <div className="loaderBlack h-screen w-screen bg-black"></div>
        <div className="loaderOrange w-screen absolute h-0 bg-gradient-to-r from-[#534158] via-[#FF990F] to-[#FF990F] bottom-0 "></div>
        <div className="loaderMainContent w-screen h-0 bottom-0 overflow-hidden absolute">

          {/* bluyee section */}
          <div className="relative h-screen w-full ">
            {/* Background Video */}
            <video src={bgVideo} autoPlay loop muted id="video" className="w-full sm:h-[80vh] h-[60vh] object-cover"></video>

            {/* Overlay on the video */}
            <div className="absolute gap-3 top-0 w-full h-screen flex flex-col justify-start items-center">
              <img src={bluye} className="sm:h-[65vh] h-[40vh] mt-18 sm:mt-0" /> {/* GIF */}
              <div className='relative w-full sm:h-[43vh] h-[50vh] bg-[#F6F6F6] sm:rounded-t-[6em] rounded-t-4xl flex flex-col text-center px-2 sm:px-10 sm:pt-8 pt-3 gap-1.5 sm:gap-4'>
                <h1 className='crete-round-regular font-extrabold text-2xl sm:text-5xl'>  Heyyy!!! It's Bluyee</h1>
                <h1 className='crete-round-regular font-extrabold text-4xl sm:text-6xl'>Varna's Room Wall Color Visualizer</h1>
                <p className='crete-round-regular leading-6 sm:leading-10 text-lg sm:text-2xl text-[]'>Transform your space with us!!
                  Upload a photo of your room and explore a wide palette of
                  colors to see your dream interiors come to life
                  From vibrant tones to calming neutrals,
                  find the perfect shade to match your style. Let your imagination
                  shape your walls!</p>
              </div>
            </div >
          </div>
        </div>
      </section>

    </>
  )
}

export default Screen1;
