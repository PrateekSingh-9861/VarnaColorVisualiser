import React from "react";
import { Link } from "react-router-dom";

const tools = [
  {
    image: "https://www.shalimarpaints.com/uploads/Budget-Calculator-mobile.jpg",
    title: "Paint Budget Calculator",
    description: "Estimate the cost of painting based on area and color preferences.",
    overlayColor: "bg-[#1F2937]/70", // Gray overlay
    link: "/paint-calculator",
  },
  {
    image: "https://i.pinimg.com/736x/be/a3/45/bea34579d6469ba7b61cbd83d65a5c92.jpg",
    title: "Room Wall Colour Visualiser",
    description: "Visualise paint colors on your room walls before making a decision.",
    overlayColor: "bg-[#4B2E83]/60", // Purple overlay
    link: "/visualiser",
  },
];

const ToolCard = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 py-8 px-6">
        {tools.map((tool, index) => (
          <div key={index} className="relative w-[27vw] h-[65vh] rounded-2xl overflow-hidden">
            {/* Background Image */}
            <img src={tool.image} alt={tool.title} className="w-full h-full object-cover" />

            {/* Colored Overlay */}
            <div className={`absolute w-80 h-50 rounded-t-xl bottom-0 p-4 text-white ${tool.overlayColor}`}>
              <h3 className="text-3xl font-bold">{tool.title}</h3>
              <p className="text-m mt-2 font-semibold">{tool.description}</p>

              {/* Navigation Button */}
              <Link to={tool.link}>
                <button className="relative mt-4 px-4 py-1 text-m font-medium border border-white overflow-hidden rounded-full text-white transition-all 
                duration-500 hover:text-black before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-white 
                before:transition-all before:duration-500 hover:before:w-full">
                  <span className="relative z-10">Explore Now →</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToolCard;
