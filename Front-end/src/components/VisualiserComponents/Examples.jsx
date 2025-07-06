import React from 'react';
import ImgCard from './ImgCard';

const Examples = ({onImageSelect}) => {
    const handleImageClick = (image) => {
        onImageSelect(image);
      };

    return (
        <>
            <div className='flex flex-col px-4 h-full items-center sm:pt-10 gap-1 sm:gap-2'>
            <h1 className='crete-round-regular text-[1.5em]'>USE OUR PHOTOS</h1>
                <ImgCard
                    heading="Bedrooms:"
                    image1="/images/bedroom-1.jpg"
                    image2="/images/bedroom-2.jpg"
                    onImageClick={handleImageClick}
                />

                <ImgCard
                    heading="Kitchen:"
                    image1="https://via.placeholder.com/150"
                    image2="https://via.placeholder.com/150/0000FF"
                    onImageClick={handleImageClick}
                />

                <ImgCard
                    heading="Living Room:"
                    image1="/images/living-room-1.jpg"
                    image2="https://via.placeholder.com/150/0000FF"
                    onImageClick={handleImageClick}
                />

                <ImgCard
                    heading="Kid's Room:"
                    image1="/images/kiddo-1.jpg"
                    image2="/images/kiddo-2.jpg"
                    onImageClick={handleImageClick}
                />  
            </div>
        </>
    );
};

export default Examples;
