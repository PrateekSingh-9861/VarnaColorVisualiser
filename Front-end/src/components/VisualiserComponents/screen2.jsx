import React, { useState } from 'react'
import ColorPalette from './colorPalette';
import ExampleImg from './Examples';
import ToolSection from './ToolSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const Screen2 = React.forwardRef(({ scrollToVisualiser }, ref) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null); // Default black color

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    };
    return (
        <>
            {/* tips section  */}
            <section className="w-full sm:h-screen px-2 sm:justify-center flex flex-col bg-[#F6F6F6] sm:items-center">
                <div className="sm:h-[85vh] h-[70vh] bg-[#EDEAE0] gap-2 sm:gap-4 sm:w-[60vw] flex flex-col border text-center pt-3 sm:pt-6 sm:px-10 px-3 ">
                    <h1 className='sm:text-4xl text-3xl font-bold'>Tips for Best Results</h1>
                    <h1 className='sm:text-xl text-lg leading-6'>To achieve the most accurate and realistic color visualization,
                        follow these guidelines when uploading your room wall image:</h1>
                    <div className="text-start flex pt-1 sm:pt-0">
                        <ul className="list-disc text-base sm:text-lg">
                            <li><b>Single Wall Focus –</b>Upload an image with a clear view of a single
                                wall, taken from a reasonable distance for better precision</li>
                            <li><b>Minimal Objects –</b>Ensure there are as few objects as
                                possible in the image to avoid interference with the coloring process.</li>
                            <li><b>No Human Presence –</b>For the best results, avoid including people in the image.</li>
                            <li><b>Good Lighting & Quality –</b>Use a high-quality image with decent lighting to
                                enhance color accuracy and visualization.</li>
                        </ul></div>
                    <div className="w-full h-80 justify-evenly flex  ">
                        <div className="sm:w-60 sm:h-60 w-36 h-40 border" onClick={scrollToVisualiser} >
                            <img src="/images/Use-Ours.jpg" className='sm:w-full sm:h-52 w-36 h-32  object-cover border-b' />
                            <h1 className='text-lg'><b> USE OUR PHOTOS</b></h1>
                        </div>
                        <div className="sm:w-60 sm:h-60 w-36 h-40 border" onClick={scrollToVisualiser}>
                            <img src="/images/Upload-Yours.jpg" className='sm:w-full sm:h-52 w-36 h-32 object-cover border-b' />
                            <h1 className='text-lg'><b> UPLOAD YOUR PHOTO</b></h1>
                        </div>
                    </div>
                </div>
            </section>

            <main ref={ref} className="w-full h-full sm:flex-row flex-col
            justify-between sm:pt-5 flex sm:px-6 px-2 bg-[#F6F6F6]">

                <div className='sm:w-[24vw] pt-16 sm:pt-0'>
                    <ExampleImg onImageSelect={handleImageSelect} />
                </div>

                {/* div for editing area */}
                <div className=' sm:w-[48vw] pt-16 sm:pt-0 pb-6 flex flex-col text-center'>
                    <ToolSection selectedImage={selectedImage} selectedColor={selectedColor} />
                </div>

                <div className=' sm:w-[24vw]'>
                    <ColorPalette onColorSelect={setSelectedColor} />
                </div>


            </main>
        </>
    );
});

export default Screen2;
