import React, { useState } from 'react';

const PaintCalculator = () => {
  const [area, setArea] = useState('');
  const [category, setCategory] = useState('economy');
  const [includeSecondCoat, setIncludeSecondCoat] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  const rates = {
    economy: 15,
    premium: 25,
    luxury: 40
  };

  const handleCalculate = () => {
    const baseRate = rates[category];
    const baseCost = area * baseRate;

    const secondCoatCost = includeSecondCoat ? baseCost * 0.5 : 0;
    const subtotal = baseCost + secondCoatCost;
    const gst = subtotal * 0.18;
    const finalCost = subtotal + gst;

    setTotalCost(finalCost);
  };

  return (
    <>
      <div className="min-h-screen bg-white py-10 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Paint Budget Calculator
        </h2>
        <div className="max-w-2xl mx-auto bg-[#F5F4F0] rounded-2xl shadow-lg p-6 space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Surface Area (in sq.ft)
            </label>
            <input type="number" value={area} onChange={(e) => setArea(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter total surface area"/>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Paint Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="economy">Economy (₹15/sq.ft)</option>
              <option value="premium">Premium (₹25/sq.ft)</option>
              <option value="luxury">Luxury (₹40/sq.ft)</option>
            </select>
          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" checked={includeSecondCoat}
            onChange={() => setIncludeSecondCoat(!includeSecondCoat)} className="w-5 h-5"/>
            <label htmlFor="secondCoat" className="text-gray-700 font-medium">
              Include Second Coating (adds 50% extra)
            </label>
          </div>
          <button
            onClick={handleCalculate}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Calculate Budget </button>
          <div className="text-xl font-semibold text-gray-800 text-center">
            Estimated Budget: ₹{totalCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <strong>Note:</strong> This estimated price includes base paint cost, optional second coating, and 18% GST. Final cost may vary depending on your location, brand selection, and labor skill levels.
          </p>
        </div>
      </div>
    </>
  );
};

export default PaintCalculator;
