import React from "react";
import "./Styles/Wallet.css";

export default function Wallet() {
  return (
    <div className="tcq-wallet-page">
      {/* HERO SECTION */}
      <section className="wallet-hero">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <span className="platform-tag">PLATFORM: TCQ ECOSYSTEM</span>
          <h1 className="hero-title">TCQ WALLET</h1>
          <p className="hero-subtitle">
            La experiencia nocturna definitiva, 100% cashless. Tu saldo, tus consumos y tus accesos en un solo lugar.
          </p>
          <a
            href="https://wallet.tcqlub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wallet-cta btn-pulse"
          >
            IR A TCQ WALLET →
          </a>
        </div>
      </section>

      {/* QUE ES WALLET SECTION */}
      <section className="wallet-info-section">
        <div className="info-grid">
          <div className="info-text-block">
            <h2 className="section-title">¿QUÉ ES TCQ WALLET?</h2>
            <p className="info-description">
              Es la billetera digital oficial de <strong>TCQ Club</strong> diseñada para simplificar tu noche. 
              Olvidate de las filas en la caja, el efectivo o de perder tus tickets físicos. 
              Con <strong>TCQ Wallet</strong>, tenés el control total de tu experiencia cashless desde tu teléfono.
            </p>
          </div>
          <div className="info-visual-block">
            <div className="glass-card mockup-card">
              <div className="mockup-header">
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
              </div>
              <div className="mockup-body">
                <div className="mockup-balance-label">SALDO DISPONIBLE</div>
                <div className="mockup-balance-amount">$18.500,00</div>
                <div className="mockup-card-number">TCQ CARD •••• 8372</div>
                <div className="mockup-footer">
                  <div className="mockup-status">ACTIVE MEMBER</div>
                  <div className="mockup-points">580 PTS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA SECTION */}
      <section className="how-it-works-section">
        <h2 className="section-title text-center">¿CÓMO FUNCIONA?</h2>
        <div className="steps-grid">
          <div className="step-card glass-card">
            <div className="step-number">01</div>
            <h3 className="step-title">ACCEDÉ</h3>
            <p className="step-text">
              Ingresá a <a href="https://wallet.tcqlub.com" target="_blank" rel="noopener noreferrer" className="highlight-link">wallet.tcqlub.com</a> desde el navegador de tu celular o instalá la App directamente en tu pantalla de inicio.
            </p>
          </div>

          <div className="step-card glass-card">
            <div className="step-number">02</div>
            <h3 className="step-title">REGISTRATE</h3>
            <p className="step-text">
              Creá tu cuenta de forma instantánea usando tu dirección de correo electrónico o de manera rápida con tu cuenta de Google.
            </p>
          </div>

          <div className="step-card glass-card">
            <div className="step-number">03</div>
            <h3 className="step-title">CARGÁ Y USÁ</h3>
            <p className="step-text">
              Cargá saldo online con Mercado Pago, pagá tus consumos en la barra escaneando tu QR y recibí tus tickets digitales al instante.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS SECTION */}
      <section className="benefits-section">
        <h2 className="section-title text-center">BENEFICIOS EXCLUSIVOS</h2>
        <div className="benefits-grid">
          <div className="benefit-card glass-card">
            <div className="benefit-icon-wrapper">
              {/* Icono: Sin Efectivo */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="benefit-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125H3.75a1.125 1.125 0 0 1-1.125-1.125V5.625c0-.621.504-1.125 1.125-1.125Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
              </svg>
            </div>
            <h3 className="benefit-title">100% Cashless</h3>
            <p className="benefit-text">Olvidate del efectivo. Cargá saldo previamente y pagá en barra escaneando tu código QR personal en segundos.</p>
          </div>

          <div className="benefit-card glass-card">
            <div className="benefit-icon-wrapper">
              {/* Icono: Tickets Digitales */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="benefit-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-12h9c.621 0 1.125.504 1.125 1.125V18c0 .621-.504 1.125-1.125 1.125h-9A1.125 1.125 0 0 1 3.75 18V7.125c0-.621.504-1.125 1.125-1.125Zm2.25 2.25h.008v.008h-.008V8.25Zm0 3.75h.008v.008h-.008v-.008Zm0 3.75h.008v.008h-.008v-.008Z" />
              </svg>
            </div>
            <h3 className="benefit-title">Tickets Digitales</h3>
            <p className="benefit-text">Comprá tus entradas y recibí tus accesos directo en la app. Entrás al club mostrando tu QR en puerta sin demoras.</p>
          </div>

          <div className="benefit-card glass-card">
            <div className="benefit-icon-wrapper">
              {/* Icono: Recompensas */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="benefit-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.15-.427.788-.427.938 0l1.98 5.79h6.111c.473 0 .668.614.284.897l-4.947 3.518 1.89 5.544c.148.434-.356.802-.733.519L12 16.27l-4.947 3.518c-.377.283-.88-.085-.733-.519l1.89-5.544-4.947-3.518c-.384-.283-.19-.897.284-.897h6.11l1.98-5.79Z" />
              </svg>
            </div>
            <h3 className="benefit-title">Puntos y Recompensas</h3>
            <p className="benefit-text">Cada consumo que realices dentro del club suma puntos TCQ que podés canjear por entradas libres, tragos y merch oficial.</p>
          </div>

          <div className="benefit-card glass-card">
            <div className="benefit-icon-wrapper">
              {/* Icono: Acceso Rápido */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="benefit-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            </div>
            <h3 className="benefit-title">Acceso Instantáneo</h3>
            <p className="benefit-text">App ultraliviana. Funciona directo desde el navegador de tu celular y podés instalarla en tu pantalla de inicio como PWA.</p>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="wallet-final-cta">
        <div className="cta-glow"></div>
        <div className="cta-content glass-card">
          <h2 className="cta-title">¿LISTO PARA VIVIR LA EXPERIENCIA TCQ?</h2>
          <p className="cta-description">
            Unite a la comunidad cashless de TCQ Club. Creá tu cuenta gratis hoy mismo y empezá a disfrutar de los beneficios.
          </p>
          <a
            href="https://wallet.tcqlub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wallet-cta btn-neon"
          >
            INGRESAR A TCQ WALLET →
          </a>
        </div>
      </section>
    </div>
  );
}
