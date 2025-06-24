import React from "react";

const BedroomInterior = () => {
  const bedroomDesigns = [
    {
      title: "Soothing Lavender Retreat",
      description:"Lavender tones create a calming and peaceful bedroom atmosphere, ideal for relaxation and unwinding after a long day.",
      img: "https://images.timesproperty.com/webstories_manage/1701411394_DACEA02C-D7F3-44E7-9836-E7C3642434FF.webp"
    },
    {
      title: "Modern Earthy Tones",
      description:"Earth-inspired colors like muted terracotta or olive green add warmth and modern sophistication to your bedroom.",
      img: "https://i.pinimg.com/736x/bb/76/73/bb76738cdf8861f391563f447247df03.jpg"
    },
    {
      title: "Minimalist White Comfort",
      description:"Crisp white walls offer simplicity and elegance, making the bedroom feel airy, spacious, and clean.",
      img: "https://media.designcafe.com/wp-content/uploads/2021/05/24171549/white-minimalist-bedroom-with-accent-baby-pink-wall.jpg"
    },
    {
      title: "Cozy Charcoal Contrast",
      description:"A dark charcoal accent wall adds drama and depth to the bedroom, beautifully balanced with neutral or wooden decor.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnu5Fm5unkeDzjngCXsLLcaCsr636ATSo3w&s"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Bedroom Interior Paints
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {bedroomDesigns.map((design, index) => (
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
              <h3 className="text-3xl font-semibold text-gray-800">{design.title}</h3>
              <p className="text-gray-600 text-base mt-2">{design.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BedroomInterior;
