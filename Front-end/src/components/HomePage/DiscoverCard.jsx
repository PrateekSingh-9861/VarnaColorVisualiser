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
      <h2 className="text-6xl font-light pt-16">
        Discover our <span className="text-red-600 font-light">world of paint and décor</span>
      </h2>
      <p className="text-gray-600 mt-4 text-2lg">
        One-stop solution for all you need to keep your living space intact.
      </p>

      {/* Cards Container - No Gaps */}
      <div className="flex h-[70vh] w-[85vw] pt-10">
        {categories.map((category, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative h-full transition-all duration-500 ease-out will-change-transform flex ${hoveredIndex === index
              ? "flex-[1.2]" // Slightly larger expansion
              : hoveredIndex !== null
                ? "flex-[0.8]" // Slightly less compression
                : "flex-1"
              }`}
          >
            <div className={`h-full w-full ${category.bgColor} overflow-hidden flex flex-col justify-center items-center transition-all duration-500 ease-out relative`}>

              {/* Image - Disappears on Hover */}
              <img src={category.image} alt={category.name} className={`w-[75%] h-[75%] object-cover transition-opacity duration-500 ease-in-out ${hoveredIndex === index ? "opacity-0" : "opacity-100"}`} />

              {/* Description & Button - Appears on Hover */}
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center text-center px-6 transition-opacity duration-500 ease-in-out ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}>
                <h3 className="text-4xl font-semibold text-black">{category.name}</h3>
                <p className="text-black mt-4">{category.description}</p>
                <Link to={category.link}>
                  <button className="relative mt-6 px-6 py-2 text-lg font-medium border border-black overflow-hidden rounded-full text-black transition-all 
                  duration-500 hover:text-white before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-black before:to-black 
                  before:transition-all before:duration-500 hover:before:w-full">
                    <span className="relative z-10">View Details →</span>
                  </button>
                </Link>
              </div>

              <div className={`bottom-4 mt-4 uppercase w-full text-center ${hoveredIndex === index ? "opacity-0" : "opacity-100"}`}>
                <h3 className="text-xl text-black font-semibold">{category.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverCard;
