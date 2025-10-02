// backend/server.js
import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from "mercadopago";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// ⚡ Configuración Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN, // tomado de .env
});

// ✅ Ruta de prueba
app.get("/", (req, res) => {
  res.send("✅ Backend funcionando con Mercado Pago v2 y YouTube API (con fallback)");
});

// 🛒 Crear preferencia de pago
app.post("/create_preference", async (req, res) => {
  try {
    const { title, quantity, price } = req.body;

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            title,
            quantity,
            currency_id: "ARS",
            unit_price: Number(price),
          },
        ],
        back_urls: {
          success: "http://localhost:5173/success",
          failure: "http://localhost:5173/failure",
          pending: "http://localhost:5173/pending",
        },
        auto_return: "approved",
      },
    });

    res.json({ id: result.id });
  } catch (error) {
    console.error("❌ Error creando preferencia:", error);
    res.status(500).json({ error: "Error al crear preferencia" });
  }
});

// 🎥 Último video de YouTube con fallback fijo
app.get("/api/youtube/latest", async (req, res) => {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;

    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const latestVideo = data.items[0];
      res.json({
        videoId: latestVideo.id.videoId,
        title: latestVideo.snippet.title,
        thumbnail: latestVideo.snippet.thumbnails.high.url,
      });
    } else {
      // ⚡ Fallback si no hay videos
      res.json({
        videoId: "0OHG46VUJkI",
        title: "Último video TCQ",
        thumbnail: "https://img.youtube.com/vi/0OHG46VUJkI/hqdefault.jpg",
      });
    }
  } catch (error) {
    console.error("❌ Error consultando YouTube:", error);

    // ⚡ Fallback si la API rompe
    res.json({
      videoId: "0OHG46VUJkI",
      title: "Último video TCQ",
      thumbnail: "https://img.youtube.com/vi/0OHG46VUJkI/hqdefault.jpg",
    });
  }
});

// 🚀 Levantar servidor
app.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
});

// Suscripciones temporales (en memoria)
let subscribers = [];

app.post("/subscribe", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  subscribers.push({ name, email, date: new Date() });
  console.log("🆕 Nuevo suscriptor:", { name, email });
  res.json({ success: true });
});
