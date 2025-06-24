import React from "react";

const woodDesigns = [
  {
    title: "Natural Clear Finish",
    description: "Enhance the beauty of original wood grain with clear coatings that provide protection and a satin sheen. Ideal for premium furniture and cabinets.",
    img: "https://indigopaints.com/wp-content/uploads/2020/04/4IGP2-1-1.webp"
  },
  {
    title: "Walnut Matt Polish",
    description: "This classic matte finish brings out the richness of dark walnut wood and works beautifully on traditional doors, wooden ceilings, and paneling.",
    img: "https://woodywalls.com/wp-content/uploads/2024/10/types-of-wood-finishes-woodywalls-1-2-700x666.webp"
  },
  {
    title: "Mahogany Tint Coating",
    description: "Mahogany tints add reddish-brown depth and warmth to surfaces. Great for antique-inspired interiors, bookshelves, and premium bed frames.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOiLcF5QH4kSf-tCc8DAisavKZKgjSzhIKw&s"
  },
  {
    title: "White Washed Texture",
    description: "For a rustic farmhouse vibe, this semi-transparent white-wash finish keeps the grain visible while softening the wood’s tone.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsvppbwKI_A1TX6eERKHxwAtxE8pNCGK6oQ&s"
  }
];

const WoodPaints = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Wood Paints & Finishes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {woodDesigns.map((design, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-[#F5F4F0]"
          >
            <img src={design.img} alt={design.title} className="w-full h-96 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-semibold text-gray-800">{design.title}</h3>
              <p className="text-gray-600 text-base mt-2">{design.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WoodPaints;
