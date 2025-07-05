import React, { useState } from "react";
import { Link } from "react-router-dom";

const DiscoverCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    {
      name: "Interior Paints",
      image: "/images/Discover-interior.jpg",
      bgColor: "bg-[#3D5754]",
      link: "/interior-designs",
      description: "Discover a diverse selection of interior paints catering to luxury, premium and economy along with designer Royale collection",
    },
    {
      name: "Exterior Paints",
      image: "/images/Discover-exterior.jpg",
      bgColor: "bg-[#AEBBC4]",
      link: "/exterior-designs",
      description: "Enhance your outdoor spaces with our range of exterior paints and textures tailored for you, from high-end to budget-friendly options."
    },
    {
      name: "Wallpapers",
      image: "/images/Discover-wallpaper.jpg",
      bgColor: "bg-[#EAE8E0]",
      link: "/wallpapers",
      description: "Discover our extensive wallpaper collections, offering a range of designs from Artisanal to exclusive Sabyasachi collection."
    },
    {
      name: "Wood Paints",
      image: "/images/Discover-woodpaint.jpg",
      bgColor: "bg-[#9A6745]",
      link: "/wood-paints",
      description: "Delve into our wood finishing options, offering a spectrum of finishes from Clear to Coloured, suitable for all wood types."
    },
    {
      name: "Metal Paints",
      image: "/images/Discover-metalpaint.jpg",
      bgColor: "bg-[#DCCFC6]",
      link: "/metal-paints",
      description: "Explore our range of enamel paints for specially formulated paints that protect and beautify surfaces, and are easy-to-clean."
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="sm:text-6xl text-4xl font-light sm:pt-16 pt-12 px-2 sm:px-0 text-center">
        Discover our <span className="text-red-600 font-light">world of paint and décor</span>
      </h2>
      <p className="text-gray-600 sm:mt-4 mt-2 text-2lg">
        One-stop solution for all you need to keep your living space intact.
      </p>

      {/* Cards Container - No Gaps */}
      <div className="sm:flex sm:flex-row flex flex-col h-auto sm:h-[80vh] w-[96%] sm:w-[85vw] pt-6 sm:pt-12">
        
        {categories.map((category, index) => (
          <div key={index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setHoveredIndex(index === hoveredIndex ? null : index)} // mobile tap
            className={`relative h-full transition-all duration-500 ease-out will-change-transform flex ${hoveredIndex === index
              ? "flex-[1.4]"
              : hoveredIndex !== null
                ? "flex-[0.6]"
                : "flex-1"}`}>
            <div className={`h-full w-full ${category.bgColor} overflow-hidden flex sm:flex-col justify-center items-center transition-all duration-500 ease-out relative p-2 sm:p-6`}>
              {/* Image */}
              <img src={category.image} alt={category.name} className={`sm:w-[85%] sm:h-[85%] min-w-[130px] h-[100px] object-cover transition-opacity 
              duration-500 ease-in-out ${hoveredIndex === index ? "opacity-0" : "opacity-100" }`}/>

              {/* Description + Button */}
              <div className={`absolute flex flex-col justify-center items-center text-center px-5 sm:px-8 transition-opacity duration-500 
              ease-in-out ${hoveredIndex === index ? "opacity-100" : "opacity-0" }`}>
                <h3 className="text-xl sm:text-4xl md:text-5xl font-semibold text-black">
                  {category.name}
                </h3>
                <p className="text-sm sm:text-lg text-black sm:mt-5">{category.description}</p>

                <Link to={category.link}>
                  <button className="relative sm:mt-6 px-3 py-1 sm:px-8 text-sm sm:text-xl font-medium border border-black overflow-hidden 
                  rounded-full text-black transition-all duration-500 hover:text-white before:absolute before:top-0 before:left-0 before:h-full 
                  before:w-0 before:bg-gradient-to-r before:from-black before:to-black before:transition-all before:duration-500 hover:before:w-full">
                    <span className="relative z-10">View Details →</span>
                  </button>
                </Link>
              </div>

              {/* Name Below Image */}
              <div className={`mt-3 sm:mt-5 uppercase w-full text-center transition-opacity duration-500 ease-in-out ${hoveredIndex === index ? "opacity-0" : "opacity-100" }`}>
                <h3 className="text-xl sm:text-2xl  text-black font-semibold">{category.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DiscoverCard;
