import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import YouTubeLatest from "./components/YouTubeLatest";
import WelcomeModal from "./components/WelcomeModal";

export default function App() {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTypingDone(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero */}
      <header
        className="vh-100 d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: "url('/backgroundHero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="overlay"></div>
        <div className="container position-relative d-flex flex-column align-items-center">
          {/* Logo */}
          <img
            src="/logo-tcq-transparenteblanco.svg"
            alt="TCQ Club"
            className="img-fluid mb-4 hero-logo"
          />

          {/* Subtítulo */}
          <p className={`hero-subtitle typewriter ${typingDone ? "done" : ""}`}>
            Cultura Techno, Buenos Aires, Argentina
          </p>

          {/* Botones */}
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
            <a
              href="https://venti.com.ar/organizadores/tcq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modern"
            >
              🎟 Comprar en Venti
            </a>

            <button
              className="btn-modern-outline"
              onClick={() =>
                window.open("https://forms.gle/wE98uN5FUmfVXrYv7", "_blank")
              }
            >
              📩 Anotarme en Lista
            </button>
          </div>

          {/* Redes sociales */}
          <div className="d-flex gap-4 justify-content-center social-links">
            <a
              href="https://www.instagram.com/tcq_club"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/tcq-club"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com/@tcq_club"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link youtube"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </div>
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
    </>
  );
}
