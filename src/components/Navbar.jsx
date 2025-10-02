// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top artlab-nav">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#home">
          <img
            src="/logo-tcq-transparenteblanco.svg"
            alt="TCQ Club"
            height="40"
          />
        </a>

        {/* Botón hamburguesa (mobile) */}
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#booking">Booking Artist</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#label">Label</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#streaming">Streaming</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#merch">Merch</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#fractalbar">Fractal Bar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#events">Events</a>
            </li>
          </ul>

          {/* Botones a la derecha */}
          <ul className="navbar-nav ms-auto align-items-center gap-2">
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
