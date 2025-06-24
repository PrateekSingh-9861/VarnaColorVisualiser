import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const services = [
  {
    image: "/images/home-interior.jpg",
    title: "Home Interiors",
    description: "Get home décor advice and book interior design services.",
    overlayColor: "bg-[#332818]/70", // Blue overlay with 70% opacity
    link: "/home-interior", // Route for navigation
  },
  {
    image: "/images/bedroom-interior.jpg",
    title: "Bedroom Interiors",
    description: "Explore home décor ideas curated by our design experts.",
    overlayColor: "bg-red-950/70", // Red overlay with 70% opacity
    link: "/bedroom-interior", // Route for navigation
  },
  {
    image: "/images/kitchen.webp",
    title: "Modular Kitchen",
    description: "Shape your dream kitchen with our diverse collection.",
    overlayColor: "bg-green-950/70", // Green overlay with 70% opacity
    link: "/modular-kitchen", // Route for navigation
  },
];

const ServiceCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 py-10 px-6">
      {services.map((service, index) => (
        <div key={index} className="relative w-[25vw] h-[65vh] rounded-2xl overflow-hidden ">
          {/* Background Image */}
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />

          {/* Colored Overlay */}
          <div className={`absolute w-80 h-50 rounded-t-xl bottom-0 p-6 text-white ${service.overlayColor}`}>
            <h3 className="text-3xl font-bold">{service.title}</h3>
            <p className="text-m mt-2 font-semibold">{service.description}</p>

            {/* Link for Navigation */}
            <Link to={service.link}>
              <button className="relative mt-4 px-4 py-2 text-m font-medium border border-white overflow-hidden rounded-full text-white transition-all 
                duration-500 hover:text-black before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-white before:to-white 
                before:transition-all before:duration-500 hover:before:w-full">
                <span className="relative z-10">Explore Now →</span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
