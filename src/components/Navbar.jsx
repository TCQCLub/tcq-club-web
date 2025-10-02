import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar({ cartCount = 0, onLoginClick, onLangChange }) {
  const [lang, setLang] = useState("ES");

  const toggleLang = () => {
    const newLang = lang === "ES" ? "EN" : "ES";
    setLang(newLang);
    if (onLangChange) onLangChange(newLang);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand fw-bold neon-text" href="#top">
          TCQ
        </a>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#events">
                Eventos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Galería
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Consultas
              </a>
            </li>

            {/* Carrito */}
            <li className="nav-item position-relative">
              <a className="nav-link" href="#cart">
                <i className="bi bi-cart3 fs-5"></i>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </a>
            </li>

            {/* Login */}
            <li className="nav-item">
              <button
                className="btn btn-sm btn-outline-light"
                onClick={onLoginClick}
              >
                <i className="bi bi-person-circle me-1"></i> Login
              </button>
            </li>

            {/* Idioma */}
            <li className="nav-item">
              <button className="btn btn-sm btn-gradient" onClick={toggleLang}>
                {lang}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
