// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Navbar from "./components/Navbar";
import WelcomeModal from "./components/WelcomeModal";

// Importamos las páginas
import Home from "./components/pages/Home";
import Nosotros from "./components/pages/Nosotros";
import Booking from "./components/pages/Booking";
import Label from "./components/pages/Label";
import Streaming from "./components/pages/Streaming";
import Merch from "./components/pages/Merch";
import FractalBar from "./components/pages/FractalBar";
import Events from "./components/pages/Events";
import Suscripcion from "./components/pages/Suscripcion";
import AdminLogin from "./components/pages/AdminLogin";
import AdminSubscribers from "./components/pages/AdminSubscribers";

// Importamos el protector
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/label" element={<Label />} />
        <Route path="/streaming" element={<Streaming />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/fractalbar" element={<FractalBar />} />
        <Route path="/events" element={<Events />} />
        <Route path="/suscripcion" element={<Suscripcion />} />
        
        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/subscribers"
          element={
            <ProtectedRoute>
              <AdminSubscribers />
            </ProtectedRoute>
          }
        />
      </Routes>

      <WelcomeModal />

      <footer className="footer-modern text-white text-center py-4">
        <div className="container">
          <p className="mb-1 small">
            © {new Date().getFullYear()} TCQ Club · Cultura Techno en Buenos Aires
          </p>
        </div>
      </footer>
    </Router>
  );
}
