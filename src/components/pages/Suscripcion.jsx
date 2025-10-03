import React, { useState, useRef } from "react";
import { Toast } from "bootstrap"; // ✅ Importar Toast directamente

export default function Suscripcion() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    ciudad: "",
    edad: "",
    intereses: "",
  });
  const [error, setError] = useState("");
  const toastRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.ciudad || !formData.edad) {
      setError("⚠️ Por favor completa todos los campos obligatorios.");
      return;
    }

    setError("");

    try {
      const res = await fetch("http://localhost:4000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setFormData({ nombre: "", email: "", ciudad: "", edad: "", intereses: "" });

        // ✅ Usar Toast de Bootstrap importado
        const toastEl = toastRef.current;
        const toast = new Toast(toastEl);
        toast.show();
      } else {
        setError(data.error || "❌ Error al suscribirse");
      }
    } catch (err) {
      console.error("Error en suscripción:", err);
      setError("❌ No se pudo conectar al servidor");
    }
  };

  return (
    <div className="container py-5 text-white">
      <h2 className="mb-4">📩 Suscripción a TCQ</h2>
      <p>
        Unite a la familia TCQ y recibí <strong>promociones semanales</strong> de eventos,
        barra, radio streaming y experiencias culturales exclusivas.
      </p>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Nombre *</label>
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
          <label className="form-label">Email *</label>
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
          <label className="form-label">Ciudad *</label>
          <input
            type="text"
            name="ciudad"
            className="form-control"
            value={formData.ciudad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Edad *</label>
          <select
            name="edad"
            className="form-select"
            value={formData.edad}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona tu rango</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45+">45+</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Intereses</label>
          <input
            type="text"
            name="intereses"
            className="form-control"
            placeholder="Ej: Techno, Eventos, Radio..."
            value={formData.intereses}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-gradient w-100">
          🚀 Suscribirse
        </button>
      </form>

      {/* Toast Bootstrap */}
      <div
        ref={toastRef}
        className="toast align-items-center text-white bg-primary border-0 position-fixed bottom-0 end-0 m-4"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">
            🎉 BIENVENIDO A LA FAMILIA TCQ, VAMOS POR TODO BRO!
          </div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
}
