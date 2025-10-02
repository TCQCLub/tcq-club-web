// Events.jsx
import React from "react";

const EVENTS = [
  { id: 1, title: "Techno Night", date: "Viernes 23hs", img: "/event1.jpg" },
  { id: 2, title: "After Club", date: "Sábado 2AM", img: "/event2.jpg" },
  { id: 3, title: "Guest DJ", date: "Próximo mes", img: "/event3.jpg" },
];

export default function Events() {
  return (
    <section id="events" className="page-section bg-black text-white">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">Eventos</h2>
        <hr className="divider" />
        <div className="row g-4">
          {EVENTS.map((ev) => (
            <div key={ev.id} className="col-md-4">
              <div className="card bg-dark text-white h-100 border-0">
                <img src={ev.img} className="card-img-top" alt={ev.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{ev.title}</h5>
                  <p className="card-text">{ev.date}</p>
                  <a href="#" className="btn btn-primary">
                    Comprar Entrada
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
