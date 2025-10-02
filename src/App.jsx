import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import YouTubeLatest from "./components/YouTubeLatest";
import { useTranslation } from "react-i18next";

export default function App() {
  const [typingDone, setTypingDone] = useState(false);
  const { t, i18n } = useTranslation();

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
            {t("subtitle")}
          </p>

          {/* Botones */}
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
            <a
              href="https://venti.com.ar/organizadores/tcq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modern"
            >
              {t("buy")}
            </a>

            <button
              className="btn-modern-outline"
              onClick={() =>
                window.open("https://forms.gle/wE98uN5FUmfVXrYv7", "_blank")
              }
            >
              {t("signup")}
            </button>
          </div>

          {/* Redes sociales */}
          <div className="d-flex gap-4 justify-content-center social-links mb-3">
            <a
              href="https://www.instagram.com/tcqlub"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/tcqlub"
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

          {/* Selector de idioma */}
          <div className="d-flex gap-2 mt-3">
            <button
              onClick={() => i18n.changeLanguage("es")}
              className="btn btn-sm btn-outline-light"
            >
              🇦🇷 ES
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="btn btn-sm btn-outline-light"
            >
              🇬🇧 EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("pt")}
              className="btn btn-sm btn-outline-light"
            >
              🇧🇷 PT
            </button>
          </div>
        </div>
      </header>

      {/* Último video */}
      <YouTubeLatest />

      {/* Footer */}
      <footer className="footer-modern text-white text-center py-4">
        <div className="container">
          <p className="mb-1 small">
            © {new Date().getFullYear()} TCQ Club · {t("subtitle")}
          </p>
        </div>
      </footer>
    </>
  );
}
