// src/components/pages/Suscripcion.jsx
import React, { useState } from "react";

export default function Suscripcion() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      preferencias: e.target.preferencias.value,
    };

    try {
      const res = await fetch("http://localhost:4000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error en el servidor");

      const data = await res.json();
      setMessage("✅ ¡Gracias por suscribirte!");
      e.target.reset();
    } catch (err) {
      setMessage("❌ Error al suscribirte. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5 text-white">
      <h1 className="mb-4">Suscribite a TCQ Club</h1>
      <p className="lead">
        Unite a nuestra comunidad y recibí las últimas novedades de{" "}
        <strong>eventos, lanzamientos de label y transmisiones en vivo</strong>.
        También te mandamos promos exclusivas del <em>Fractal Bar</em> 🍻.
      </p>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" name="nombre" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Preferencias</label>
          <select name="preferencias" className="form-select">
            <option value="eventos">Eventos</option>
            <option value="label">Label Releases</option>
            <option value="streaming">Streaming</option>
            <option value="bar">Fractal Bar</option>
          </select>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="consent"
            className="form-check-input"
            id="consent"
            required
          />
          <label className="form-check-label" htmlFor="consent">
            Acepto recibir emails de TCQ Club
          </label>
        </div>

        <button type="submit" className="btn btn-gradient" disabled={loading}>
          {loading ? "Enviando..." : "Suscribirme"}
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}
