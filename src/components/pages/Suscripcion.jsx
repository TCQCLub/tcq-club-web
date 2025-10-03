// src/components/pages/Suscripcion.jsx
import React, { useState } from "react";

export default function Suscripcion() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    ciudad: "",
    edad: "",
    intereses: [],
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        if (checked) {
          return { ...prev, intereses: [...prev.intereses, value] };
        } else {
          return { ...prev, intereses: prev.intereses.filter((i) => i !== value) };
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://tcq-backend.onrender.com/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMensaje("✅ Gracias por suscribirte a TCQ Club!");
        setFormData({
          nombre: "",
          email: "",
          ciudad: "",
          edad: "",
          intereses: [],
        });
      } else {
        setMensaje("⚠️ " + (data.error || "Error al suscribirse."));
      }
    } catch (error) {
      console.error(error);
      setMensaje("❌ Error al conectar con el servidor.");
    }
  };

  return (
    <div className="container py-5 text-white">
      <h2 className="mb-4">Suscribite a TCQ Club</h2>
      <p className="mb-4">
        Unite a nuestra comunidad y recibí novedades sobre eventos, streaming,
        merch y más.
      </p>

      <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ciudad</label>
          <input
            type="text"
            name="ciudad"
            className="form-control"
            value={formData.ciudad}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Edad</label>
          <select
            name="edad"
            className="form-select"
            value={formData.edad}
            onChange={handleChange}
          >
            <option value="">Seleccionar</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45+">45+</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Intereses</label>
          <div className="form-check">
            <input
              type="checkbox"
              value="Techno"
              className="form-check-input"
              onChange={handleChange}
              checked={formData.intereses.includes("Techno")}
            />
            <label className="form-check-label">Techno</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              value="Eventos"
              className="form-check-input"
              onChange={handleChange}
              checked={formData.intereses.includes("Eventos")}
            />
            <label className="form-check-label">Eventos</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              value="Merch"
              className="form-check-input"
              onChange={handleChange}
              checked={formData.intereses.includes("Merch")}
            />
            <label className="form-check-label">Merch</label>
          </div>
        </div>

        <button type="submit" className="btn btn-gradient w-100">
          Suscribirme
        </button>
      </form>

      {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}
    </div>
  );
}
