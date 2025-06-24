import React from "react";

const ModularKitchen = () => {
  const kitchenDesigns = [
    {
      title: "Glossy White Cabinets",
      description:"Clean and timeless, glossy white kitchens reflect light beautifully, making your space appear larger and brighter.",
      img: "https://www.kitchencabinetdepot.com/Merchant2/graphics/00000001/1/high-gloss-white-1920.jpg"
    },
    {
      title: "Matte Grey Finish",
      description:"Sleek matte grey surfaces offer a modern, industrial look. Perfect for open kitchens with metal fixtures or pendant lighting.",
      img: "https://napervilleroofingandconstruction.com/uploads/images/medium/64312a3adf9a942115ea15a6b84cc20e.webp"
    },
    {
      title: "Two-Tone Kitchen Style",
      description:"Mix and match upper and lower cabinet colors — like navy blue and white — for a trendy, bold modular kitchen design.",
      img: "https://st.hzcdn.com/simgs/f6a14d660468f288_8-0754/transitional-kitchen.jpg"
    },
    {
      title: "Wood Texture Panels",
      description:"Natural wood or wood-look finishes bring a cozy, rustic feel while still maintaining a modular structure and smart storage.",
      img: "https://image.made-in-china.com/202f0j00hiFuYVZKrozO/Cheapest-MDF-Board-Wooden-Cabinet-Design-Modern-Wood-Grain-Grey-Melamine-Flat-Panel-Kitchen-Cabinet-for-Home-Project.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Modular Kitchen Designs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {kitchenDesigns.map((design, index) => (
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

export default ModularKitchen;
