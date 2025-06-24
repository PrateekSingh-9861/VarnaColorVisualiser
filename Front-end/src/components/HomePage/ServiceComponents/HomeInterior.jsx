import React from "react";

const HomeInterior = () => {
    const interiorDesigns = [
        {
            title: "Classic Beige Walls",
            description:"Timeless and elegant, beige walls bring warmth to your interiors and pair beautifully with wood, metal, or neutral-toned furniture.",
            img: "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-2024-1720241010-wAOzD/wall-design-1720780354-h2rNT/wl-16-1720780473-fRxTa.jpg"
        },
        {
            title: "Royal Blue Accent Wall",
            description:"Deep royal blue adds bold sophistication to any living space or bedroom. Perfect for creating contrast and a luxurious vibe.",
            img: "https://www.benjaminmoore.com/-/media/sites/benjaminmoore/images/advice/interiors/accent-walls/seo-blog-optimization/hero/blue-accent-walls-paint-bedroom-2560x1000.jpg"
        },
        {
            title: "Soft Pastel Palette",
            description:"Delicate pinks, mints, and lilacs create a calming, playful mood. Ideal for kids' rooms, creative spaces, or artistic interiors.",
            img: "https://www.nerolac.com/sites/default/files/2023-09/Using%20Pastel%20Colours%20to%20Create%20a%20Tranquil%20and%20Serene%20Atmosphere.webp"
        },
        {
            title: "Monochrome Modern Grey",
            description:"Sleek and contemporary, shades of grey suit minimalist interiors. Use across open-plan living rooms and kitchen spaces.",
            img: "https://media.designcafe.com/wp-content/uploads/2022/02/20200030/sum-up-your-dark-grey-and-white-living-room-with-minimalism.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-white py-10 px-4 md:px-12">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
                Home Interior Paints
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {interiorDesigns.map((design, index) => (
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

export default HomeInterior;
