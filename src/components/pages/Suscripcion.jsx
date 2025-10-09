import React, { useState } from "react";
import API_BASE_URL from "../../config";

export default function Suscripcion() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    ciudad: "",
    edad: "",
    intereses: [],
  });
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        intereses: checked
          ? [...prev.intereses, value]
          : prev.intereses.filter((i) => i !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setToastVisible(true);
        setFormData({
          nombre: "",
          email: "",
          ciudad: "",
          edad: "",
          intereses: [],
        });

        setTimeout(() => setToastVisible(false), 4000);
      } else {
        alert("⚠️ Hubo un error en la suscripción");
      }
    } catch (err) {
      console.error("❌ Error en fetch:", err);
      alert("❌ Error de conexión con el servidor");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">📝 Suscribite a TCQ Club</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="ciudad"
            className="form-control"
            placeholder="Ciudad"
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
              name="intereses"
              value="Eventos"
              checked={formData.intereses.includes("Eventos")}
              onChange={handleChange}
              className="form-check-input"
              id="intereses-eventos"
            />
            <label className="form-check-label" htmlFor="intereses-eventos">
              Eventos
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              name="intereses"
              value="Merch"
              checked={formData.intereses.includes("Merch")}
              onChange={handleChange}
              className="form-check-input"
              id="intereses-merch"
            />
            <label className="form-check-label" htmlFor="intereses-merch">
              Merch
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              name="intereses"
              value="Techno"
              checked={formData.intereses.includes("Techno")}
              onChange={handleChange}
              className="form-check-input"
              id="intereses-techno"
            />
            <label className="form-check-label" htmlFor="intereses-techno">
              Techno
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Suscribirse
        </button>
      </form>

      {/* ✅ Toast de confirmación */}
      {toastVisible && (
        <div
          className="toast align-items-center text-bg-success border-0 position-fixed bottom-0 end-0 m-4 show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{ zIndex: 1055 }}
        >
          <div className="d-flex">
            <div className="toast-body">
              🎉 Gracias por sumarte a la familia <b>TCQ</b>, ¡Vamos por todo!!
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              onClick={() => setToastVisible(false)}
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}
