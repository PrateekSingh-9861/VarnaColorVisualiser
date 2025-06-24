import React from "react";

const wallpapers = [
  {
    title: "Artisanal Florals",
    description: "Delicate floral patterns inspired by hand-painted art bring a soft, elegant touch to your walls. Perfect for bedrooms, reading corners, or any serene space that needs warmth and charm.",
    img: "https://www.swalesflooring.co.im/wp-content/uploads/2024/10/Farrow-Ball-%E2%80%93-Handcrafted-Paint-and-Wallpaper-with-Swales-Flooring-5.webp"
  },
  {
    title: "Geometric Modern",
    description: "Bold lines, clean shapes, and repeating patterns define this modern geometric wallpaper look — ideal for accent walls in urban, stylish living rooms or offices.",
    img: "https://www.wallanza.com/cdn/shop/files/5472_97_AW394-4449046.jpg?v=1739424792&width=1946"
  },
  {
    title: "Sabyasachi Collection",
    description: "A luxurious fusion of tradition and style, the Sabyasachi wallpaper collection showcases rich textures, Indian motifs, and deep hues, perfect for feature walls in opulent settings.",
    img: "https://i.pinimg.com/736x/02/99/e0/0299e0eda610e017f25c2376fb3b40b6.jpg"
  },
  {
    title: "Minimal Nordic",
    description: "Soft colors and clean lines offer a calming Nordic vibe. This wallpaper is perfect for minimalist homes aiming to balance function and beauty with subtle design.",
    img: "https://cdn.magicdecor.in/com/2024/09/09155940/Modern-Vista-Trendy-Minimalist-Design-Wallpaper-Mural-M-710x488.jpg"
  }
];

const Wallpapers = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Wallpaper Designs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {wallpapers.map((design, index) => (
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

export default Wallpapers;
