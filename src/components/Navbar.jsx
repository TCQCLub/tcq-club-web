// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top artlab-nav">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/logo-tcq-transparenteblanco.svg"
            alt="TCQ Club"
            height="40"
          />
        </Link>

        {/* Hamburguesa mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link modern-link" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link modern-link" to="/booking">
                Booking Artist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link modern-link" to="/label">
                Label
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link modern-link" to="/streaming">
                Streaming
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link modern-link" to="/merch">
                Merch
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link modern-link" to="/fractalbar">
                Fractal Bar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link modern-link" to="/events">
                Events
              </Link>
            </li>

            {/* Botones especiales */}
            <li className="nav-item">
              <a
                className="btn btn-pill btn-gradient"
                href="https://venti.com.ar/organizadores/tcq"
                target="_blank"
                rel="noopener noreferrer"
              >
                🎟 Tickets
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-pill btn-outline-pill"
                data-bs-toggle="modal"
                data-bs-target="#subscribeModal"
              >
                📩 Suscripción
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
