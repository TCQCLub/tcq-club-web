// src/App.jsx
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Navbar from "./components/Navbar";
import YouTubeLatest from "./components/YouTubeLatest";
import WelcomeModal from "./components/WelcomeModal";

export default function App() {
  useEffect(() => {
    // efecto scroll en navbar
    const handleScroll = () => {
      const nav = document.querySelector(".artlab-nav");
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <header
        id="home"
        className="vh-100 d-flex align-items-center justify-content-center text-center text-white position-relative"
        style={{
          backgroundImage: "url('/backgroundHero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="container position-relative d-flex flex-column align-items-center">
          {/* Subtítulo con fade-in */}
          <h1 className="hero-subtitle fade-in">
            Cultura Techno · Buenos Aires · Argentina
          </h1>
        </div>
      </header>

      {/* Último Video */}
      <YouTubeLatest />

      {/* Footer */}
      <footer className="footer-modern text-white text-center py-4">
        <div className="container">
          <p className="mb-1 small">
            © {new Date().getFullYear()} TCQ Club · Cultura Techno en Buenos Aires
          </p>
        </div>
      </footer>

      {/* Modal de bienvenida */}
      <WelcomeModal />

      {/* Modal Suscripción */}
      <div
        className="modal fade"
        id="subscribeModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header">
              <h5 className="modal-title">Suscribite a TCQ</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value;
                  const email = e.target.email.value;

                  fetch("http://localhost:4000/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email }),
                  })
                    .then((res) => res.json())
                    .then(() => {
                      alert("✅ Gracias por suscribirte!");
                      e.target.reset();
                    })
                    .catch(() => alert("❌ Error al suscribirte"));
                }}
              >
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-modern w-100">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
