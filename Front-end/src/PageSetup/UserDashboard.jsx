import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [editing, setEditing] = useState(false);

  const [paintArea, setPaintArea] = useState("");
  const [paintCategory, setPaintCategory] = useState("economy");
  const [includeSecondCoat, setIncludeSecondCoat] = useState(false);
  const [paintCost, setPaintCost] = useState(0);

  const rates = {
    economy: 15,
    premium: 25,
    luxury: 40,
  };

  useEffect(() => {
    axios
      .get("/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        setForm({
          name: res.data.name || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
        });
      })
      .catch((err) => {
        console.error(err);
        navigate("/login");
      });
  }, []);

  const handleUpdate = () => {
    axios
      .put("/api/user/profile", form, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        setEditing(false);
      })
      .catch((err) => {
        console.error("Profile update failed", err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const calculateBudget = () => {
    const area = parseFloat(paintArea);
    if (!isNaN(area)) {
      const baseCost = area * rates[paintCategory];
      const secondCoat = includeSecondCoat ? baseCost * 0.5 : 0;
      const subtotal = baseCost + secondCoat;
      const gst = subtotal * 0.18;
      const total = subtotal + gst;
      setPaintCost(total);
    }
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Navbar */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-xl">
          <h1 className="text-xl font-bold text-indigo-700">🎨 Varna Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Paint Calculator Section */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">🧮 Paint Budget Calculator</h2>

            <input
              type="number"
              placeholder="Enter area in sq.ft"
              value={paintArea}
              onChange={(e) => setPaintArea(e.target.value)}
              className="w-full border px-3 py-2 mb-3 rounded"
            />

            <select
              value={paintCategory}
              onChange={(e) => setPaintCategory(e.target.value)}
              className="w-full border px-3 py-2 mb-3 rounded"
            >
              <option value="economy">Economy (₹15/sq.ft)</option>
              <option value="premium">Premium (₹25/sq.ft)</option>
              <option value="luxury">Luxury (₹40/sq.ft)</option>
            </select>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={includeSecondCoat}
                onChange={() => setIncludeSecondCoat(!includeSecondCoat)}
                className="mr-2 w-4 h-4"
              />
              <label>Include Second Coating (adds 50%)</label>
            </div>

            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
              onClick={calculateBudget}
            >
              Calculate
            </button>

            {paintCost > 0 && (
              <div className="mt-4 text-green-700 font-medium">
                Estimated Cost: ₹{paintCost.toFixed(2)}
              </div>
            )}

            <p className="text-sm text-gray-500 mt-2">
              <strong>Note:</strong> This estimate includes paint cost, optional second coat, and 18% GST. Actual prices may vary depending on location and labor skills.
            </p>
          </div>

          {/* Visualizer Redirect Box */}
          <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-center items-center text-center">
            <h2 className="text-lg font-semibold mb-4 text-indigo-700">🎨 Try Our Visualizer</h2>
            <p className="text-gray-600 mb-6">
              Visualize colors on your walls before you paint. Upload a room image and start designing!
            </p>
            <button
              onClick={() => navigate("/visualizer")}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Open Visualizer
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
}