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
            <section className="w-full h-screen justify-center flex flex-col bg-[#F6F6F6] items-center">
                <div className="h-[85vh] bg-[#EDEAE0] gap-4 w-[60vw] flex flex-col border text-center pt-6 pl-10 pr-10 ">
                    <h1 className='text-4xl font-bold'>Tips for Best Results</h1>
                    <h1 className='text-xl'>To achieve the most accurate and realistic color visualization,
                        follow these guidelines when uploading your room wall image:</h1>
                    <div className="text-start flex">
                        <ul className="list-disc text-lg">
                            <li><b>Single Wall Focus –</b>Upload an image with a clear view of a single
                                wall, taken from a reasonable distance for better precision</li>
                            <li><b>Minimal Objects –</b>Ensure there are as few objects as
                                possible in the image to avoid interference with the coloring process.</li>
                            <li><b>No Human Presence –</b>For the best results, avoid including people in the image.</li>
                            <li><b>Good Lighting & Quality –</b>Use a high-quality image with decent lighting to
                                enhance color accuracy and visualization.</li>
                        </ul></div>
                    <div className="w-full h-80 justify-evenly flex  ">
                        <div className="w-60 h-60 border" onClick={scrollToVisualiser} >
                            <img src="/images/Use-Ours.jpg" className='w-full h-52 object-cover border-b' />
                            <h1 className='text-lg'><b> USE OUR PHOTOS</b></h1>
                        </div>
                        <div className="w-60 h-60 border" onClick={scrollToVisualiser}>
                            <img src="/images/Upload-Yours.jpg" className='w-full h-52 object-cover border-b' />
                            <h1 className='text-lg'><b> UPLOAD YOUR PHOTO</b></h1>
                        </div>
                    </div>
                </div>
            </section>

            <main ref={ref} className="w-full h-full 
            justify-between pt-5 flex pl-6 pr-6 bg-[#F6F6F6]">

                <div className='w-[24vw]'>
                    <ExampleImg onImageSelect={handleImageSelect} />
                </div>

                {/* div for editing area */}
                <div className=' w-[48vw] pb-6 flex flex-col text-center'>
                    <ToolSection selectedImage={selectedImage} selectedColor={selectedColor} />
                </div>

                <div className=' w-[24vw]'>
                    <ColorPalette onColorSelect={setSelectedColor} />
                </div>


            </main>
        </>
    );
});

export default Screen2;
