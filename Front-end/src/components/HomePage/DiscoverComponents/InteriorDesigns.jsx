import React from "react";

const designs = [
    {
        title: "Modern Minimalist",
        description: "A smooth matte finish in subtle greys and whites offers a timeless and elegant look that effortlessly enhances the aesthetics of any interior space. These soothing, neutral tones create a calming ambiance, making them ideal for bedrooms, living rooms, or workspaces where tranquility is key. The matte texture diffuses light softly, reducing glare and adding a sophisticated depth to walls. This combination is perfect for modern minimalist designs that emphasize peace, clarity, and comfort.",
        img: "https://www.centuryply.com/blogimage/3-01-24/blog2-9.jpeg"
    },
    {
        title: "Luxury Royal",
        description: "Royal blue textures combined with elegant gold trim create a striking and opulent visual statement, perfect for interiors aiming to exude luxury and grandeur. The deep contrast between the rich blue and shimmering gold adds depth and sophistication to walls, making the space feel regal and refined. Ideal for accent walls, formal living areas, or master bedrooms, this color scheme brings a sense of majesty and timeless elegance, transforming ordinary spaces into stunning, palace-like interiors.",
        img: "https://cfw51.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoidGFsYXRpYW5kcGFydG5lcnMuY29tIiwidiI6ODcyNzM4MzU5LCJyIjoxLCJpIjoiMjNlMzMzZDEtYWM4OS00ZGQ4LWE2MWMtMTg1ZTBkY2JmNjAwIn0/wp-content/uploads/2022/01/TRENDS-14.webp"
    },
    {
        title: "Classic Vintage",
        description: "Warm tones and retro textures bring a nostalgic charm that beautifully revives the elegance of bygone eras. With rich hues like mustard, burnt orange, olive green, and deep browns, paired with vintage patterns, textured finishes, and soft lighting, this style adds character, soul, and depth to any interior. It’s perfect for creating a cozy, inviting ambiance filled with personality and warmth. These classic design elements make your space feel timeless, soulful, and thoughtfully curated with a distinctive touch of old-world sophistication.",
        img: "https://www.cyruscrafts.com/img/cms/blog/classic-interior-design/wall-art-for-classic-interior.jpg"
    },
    {
        title: "Nature Inspired",
        description: "Earthy green shades paired with natural wooden textures create a serene, nature-inspired atmosphere that brings the outdoors inside. These calming hues evoke freshness and vitality, while the wood elements add warmth and organic beauty to the space. Ideal for eco-conscious interiors or biophilic designs, this combination promotes relaxation and well-being. It’s perfect for living rooms, bedrooms, or study areas where a peaceful, grounded environment is desired, blending modern comfort with the timeless appeal of nature.",
        img: "https://www.estheticplanners.com/img/8-nature-inspired-home-decor-ideas-for-soothing-interiors-1.jpg"
    }
];

const InteriorDesigns = () => {
    return (
        <>
        <div className="min-h-screen bg-white py-10 px-4 md:px-12">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
                Interior Wall Paints & Designs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {designs.map((design) => (
                    <div key={design.id} className="rounded-2xl overflow-hidden  hover:shadow-2xl transition-shadow duration-300 bg-[#EDEAE0]">
                        <img src={design.img} alt={design.title} className="w-full h-96 object-cover" />
                        <div className="p-4">
                            <h3 className="text-3xl font-semibold text-gray-800">
                                {design.title}</h3>
                            <p className="text-gray-600 text-m mt-2">{design.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default InteriorDesigns;
