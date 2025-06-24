import React from 'react';

const ImgCard = ({ image1, image2, heading, onImageClick }) => {

    return (
        <div className="h-34 w-full bg-white border rounded-2xl">
            <div className="w-full pt-2 flex gap-2 flex-col justify-center items-center ">
                <h2 className="text-lg font-semibold text-gray-800">
                    {heading}
                </h2>
                <div className="flex justify-evenly w-full">
                    <img src={image1} alt="Image 1" onClick={() => onImageClick(image1)}
                        className="h-20 w-28 object-cover rounded cursor-pointer" />
                    <img src={image2} alt="Image 2" onClick={() => onImageClick(image2)}
                        className="h-20 w-28 object-cover rounded cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default ImgCard;
