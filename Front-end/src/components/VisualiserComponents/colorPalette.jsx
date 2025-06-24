import React, { useState, useEffect } from 'react';

const ColorPalette = ({ onColorSelect }) => {

  const [categories, setCategories] = useState([]);

  // Fetch color data from JSON file
  useEffect(() => {
    const fetchColorData = async () => {
      try {
        console.log("Fetching color data..."); // Debugging log
        const response = await fetch("/colorPalette.json"); // Make sure the file path is correct
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        // console.log("Fetched Colors:", data); // ✅ Check if data is fetched
        setCategories(data);
      } catch (error) {
        console.error("Error fetching color data:", error);
      }
    };
    fetchColorData();
  }, []);
  
  // Render color palette
  const renderPalette = () => {
    console.log("Rendering Colors:", categories); // Debugging log
    return categories.length > 0 ? (
      categories.map(group => (
        <div className="mb-8" key={group.name}>
          <h2 className="text-center font-bold mb-4">{group.name}</h2>
          <div className="grid grid-cols-6 gap-1 overflow-y-auto max-h-[500px] custom-scrollbar">
            {group.colors.map((color, index) => (
              <button
                className="relative aspect-square rounded-lg "
                key={index}
                style={{ backgroundColor: color.rgb }} // Set button background color
                onClick={() => onColorSelect(color.rgb)} // Callback when color is selected
              >
                {/* No need to display color code, just the color */}
              </button>
            ))}
          </div>
        </div>
      ))
    ) : (
      <p className="text-center">No colors available.</p>
    );
  };
  

  return (
    <div className="flex justify-center pt-10 flex-col pl-4 pr-4 items-center gap-1.5">
      <h1 className='crete-round-regular text-[1.5em]'>SCROLL TO VIEW MORE</h1>
      <div className="h-[77vh] bg-white pr-4 pl-4 pb-4 pt-3 rounded-4xl 
      w-full overflow-y-auto border custom-scrollbar">
        {renderPalette()}
      </div>
    </div>
  );
};

export default ColorPalette;