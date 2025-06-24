import React from "react";

const exteriorDesigns = [
  {
    title: "Bold Contemporary",
    description: "Bold and deep shades like charcoal black, burnt orange, and navy blue give a modern look to exterior walls. These colors offer a striking contrast against natural surroundings and are ideal for homes with sharp architectural lines. Combined with minimalistic trim and metal accents, this design brings sophistication and contemporary flair.",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=987&q=80"
  },
  {
    title: "Rustic Earth",
    description: "Inspired by nature, this design uses warm browns, terracotta reds, and sandy beiges. Perfect for countryside homes or villas, the rustic earth palette blends beautifully with stone, brick, and wooden textures, offering a welcoming and grounded vibe that stands strong against the elements.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=987&q=80"
  },
  {
    title: "Tropical Coastal",
    description: "Soft whites, ocean blues, and seafoam greens define this light and airy look. Often paired with light-colored roofs and wooden balconies, this style is perfect for beachside homes or locations with warm climates. It reflects natural light beautifully and offers a cool, refreshing exterior aesthetic.",
    img: "https://thearchitectsdiary.com/wp-content/uploads/2022/08/image-7-798x500.png"
  },
  {
    title: "Urban Industrial",
    description: "Inspired by urban settings, this design uses concrete textures, greys, and industrial shades. Best suited for modern city homes and commercial buildings, it delivers a bold, edgy look with long-lasting, weather-resistant finishes that complement steel and glass materials.",
    img: "https://i.pinimg.com/736x/f7/22/c9/f722c9a837c28e6e0750ba31752dbc2f.jpg"
  }
];

const ExteriorDesigns = () => {
  return (
    <>
      <div className="min-h-screen bg-white py-10 px-4 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Exterior Wall Paints & Designs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {exteriorDesigns.map((design, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-[#F5F4F0]"
            >
              <img
                src={design.img}
                alt={design.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h3 className="text-3xl font-semibold text-gray-800">
                  {design.title}
                </h3>
                <p className="text-gray-600 text-base mt-2">{design.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExteriorDesigns;
