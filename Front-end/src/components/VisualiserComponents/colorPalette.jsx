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
  return categories.length > 0 ? (
    <div
      className="flex overflow-x-auto snap-x snap-mandatory sm:flex-col sm:overflow-visible w-full"
    >
      {categories.map(group => (
        <div
          key={group.name}
          className="snap-start flex-shrink-0 w-full px-4 sm:px-0 sm:w-auto sm:mb-8 mb-4"
        >
          <h2 className="text-center font-bold mb-2">{group.name}</h2>

          {/* Scroll hint for mobile only */}
          <p className="text-xs text-center text-gray-500 block sm:hidden mb-2">
            Swipe left/right to see more categories →
          </p>

          <div
            className="
              grid grid-cols-6 sm:grid-cols-6
              gap-2
              px-1
            "
          >
            {group.colors.map((color, index) => (
              <button
                key={index}
                className="aspect-square rounded-lg"
                style={{ backgroundColor: color.rgb }}
                onClick={() => onColorSelect(color.rgb)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center">No colors available.</p>
  );
};

  

  return (
    <div className="flex justify-center pt-16 mb-20 flex-col sm:px-4 items-center gap-1.5">
      <h1 className='crete-round-regular text-[1.5em]'>SCROLL TO VIEW MORE</h1>
      <div className="sm:h-[77vh] h-[65vh] bg-white px-1 sm:px-4 sm:py-4 py-2 rounded-4xl 
      w-full overflow-y-auto border custom-scrollbar">
        {renderPalette()}
      </div>
    </div>
  );
};

export default ColorPalette;