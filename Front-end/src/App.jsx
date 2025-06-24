import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./PageSetup/HomePage.jsx";
import Visualiser from "./PageSetup/VisualiserPage.jsx"
import Signup from "./PageSetup/SignupPage.jsx"
import Login from "./PageSetup/LoginPage.jsx"
import Admin from "./PageSetup/AdminPanel.jsx"
import UserDashboard from "./PageSetup/UserDashboard.jsx"
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Feedback from './PageSetup/Feedback.jsx';
import AdminLogin from './PageSetup/AdminLogin';
import InteriorDesigns from "./components/HomePage/DiscoverComponents/InteriorDesigns.jsx";
import ExteriorDesigns from "./components/HomePage/DiscoverComponents/ExteriorDesigns.jsx";
import Wallpapers from "./components/HomePage/DiscoverComponents/Wallpapers.jsx";
import WoodPaints from "./components/HomePage/DiscoverComponents/WoodPaints.jsx";
import MetalPaints from "./components/HomePage/DiscoverComponents/MetalPaints.jsx";
import PaintCalculator from "./PageSetup/PaintCalculator.jsx";
import HomeInterior from "./components/HomePage/ServiceComponents/HomeInterior.jsx";
import BedroomInterior from "./components/HomePage/ServiceComponents/BedroomInterior.jsx";
import ModularKitchen from "./components/HomePage/ServiceComponents/ModularKitchen.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visualiser" element={<Visualiser />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/UserDashboard" element={<ProtectedRoute>
          <UserDashboard />
        </ProtectedRoute>} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/paint-calculator" element={<PaintCalculator />} />
        <Route path="/interior-designs" element={<InteriorDesigns />} />
        <Route path="/exterior-designs" element={<ExteriorDesigns />} />
        <Route path="/wallpapers" element={<Wallpapers />} />
        <Route path="/wood-paints" element={<WoodPaints />} />
        <Route path="/metal-paints" element={<MetalPaints />} />
        <Route path="/home-interior" element={<HomeInterior />} />
        <Route path="/bedroom-interior" element={<BedroomInterior />} />
        <Route path="/modular-kitchen" element={<ModularKitchen />} />
      </Routes>
    </Router>
  );
};

export default App;
