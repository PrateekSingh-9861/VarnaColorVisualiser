import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import ScreenOne from '../components/VisualiserComponents/screen1.jsx';
import ScreenTwo from '../components/VisualiserComponents/screen2.jsx';

const VisualiserPage = () => {
  const [screenOneLoaded, setScreenOneLoaded] = useState(false);
  const screenTwoRef = useRef(null);
  const screenOneRef = useRef(null);

  const scrollToVisualiser = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: screenTwoRef.current,
      ease: "power2.inOut"
    });
  };

  // Hide overflow until initial animation completes
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".feedback-btn", {
      opacity: 1,
      duration: 2,
      ease: "power1.out" // smooth and subtle
    });
  });

  // Handle scroll lock/unlock
  useEffect(() => {
    if (screenOneLoaded) {
      document.body.style.overflow = "auto";
      gsap.to(screenTwoRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        onStart: () => {
          // Preload ScreenTwo images
          ['/images/Use-Ours.jpg', '/images/Upload-Yours.jpg'].forEach(src => {
            new Image().src = src;
          });
        }
      });
    }
  }, [screenOneLoaded]);

  return (
    <>
      {/* Fixed Feedback Button */}
      <Link to="/feedback">
        <button className="feedback-btn overflow-hidden fixed top-3 right-3 px-3 py-1.5 rounded-full text-white bg-black transition-all 
                duration-500 hover:text-black before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r
               before:from-white before:to-white before:transition-all  before:duration-500 hover:before:w-full z-50 opacity-0">
          <span className="relative z-10">Feedback</span>
        </button>
      </Link>


      <div ref={screenOneRef}>
        <ScreenOne onLoadComplete={() => setScreenOneLoaded(true)} />
      </div>

      <div ref={screenTwoRef} style={{ opacity: screenOneLoaded ? 1 : 0, pointerEvents: screenOneLoaded ? 'auto' : 'none' }} >
        {screenOneLoaded && (
          <ScreenTwo ref={screenTwoRef} scrollToVisualiser={scrollToVisualiser} />)}
      </div>

    </>
  );
};

export default VisualiserPage;