import React, { useRef } from "react";
import ScreenOne from '../components/VisualiserComponents/screen1.jsx';
import ScreenTwo from '../components/VisualiserComponents/screen2.jsx';

const VisualiserPage = () => {
  const visualiserRef = useRef(null);

  const scrollToVisualiser = () => {
    visualiserRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ScreenOne/> 
      <ScreenTwo ref={visualiserRef} scrollToVisualiser={scrollToVisualiser} />         
    </>
  );
};

export default VisualiserPage;
