import React, { useEffect } from 'react';
import 'remixicon/fonts/remixicon.css'
import bluye from '/Blueye.gif';
import bgVideo from '/splashVideo.mp4';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Screen1 = () => {

  useEffect(() => {
    const tl = gsap.timeline();
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
    tl.to(".feedback-btn", {
      opacity: 1,
      duration: 0.5,
      ease: "power1.out" // smooth and subtle
    });

  }, []);

  return (
    <>
      <section className="h-screen w-screen relative">
        <div className="loaderBlack h-screen w-screen bg-black"></div>
        <div className="loaderOrange w-screen absolute h-0 bg-gradient-to-r from-[#534158] via-[#FF990F] to-[#FF990F] bottom-0 "></div>
        <div className="loaderMainContent w-screen h-0 bottom-0 overflow-hidden absolute">

          {/* Fixed Feedback Button */}
          <Link to="/feedback">
            <button className="feedback-btn overflow-hidden fixed top-3 right-3 px-3 py-1.5 rounded-full text-white bg-black transition-all duration-500 hover:text-black
      before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-white before:to-white before:transition-all 
      before:duration-500 hover:before:w-full z-50 opacity-0">
              <span className="relative z-10">Feedback</span>
            </button>
          </Link>

          {/* bluyee section */}
          <div className="relative h-screen w-full ">
            {/* Background Video */}
            <video
              src={bgVideo} autoPlay loop muted id="video"
              className="w-full h-[80vh] object-cover"
            ></video>

            <div className="absolute gap-3 top-0 w-full h-screen flex flex-col 
              justify-start items-center">         {/* Overlay on the video */}


              <img src={bluye} className="h-[100vh]" /> {/* GIF */}
              <div className='relative w-full h-[50vh] bg-[#F6F6F6]
           rounded-t-[6em] flex flex-col text-center pl-10 pr-10 pt-8 gap-2.5'>
                <h1 className='crete-round-regular font-extrabold text-5xl'>
                  Heyyy!!! It's Bluyee</h1>
                <h1 className='crete-round-regular font-extrabold text-6xl'>Varna's Room Wall Color Visualizer</h1>
                <h1 className='crete-round-regular text-2xl'>Transform your space with us!!
                  Upload a photo of your room and explore a wide palette of
                  colors to see your dream interiors come to life.
                  From vibrant tones to calming neutrals,
                  find the perfect shade to match your style. Let your imagination
                  shape your walls!</h1>
              </div>
            </div >
          </div>
        </div>
      </section>

    </>
  )
}

export default Screen1;
