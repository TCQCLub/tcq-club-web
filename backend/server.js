// backend/server.js
import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from "mercadopago";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Parser } from "json2csv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// ⚡ Conexión a MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error conectando a MongoDB:", err));

// 📌 Definir modelo de Suscriptores
const subscriberSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  ciudad: { type: String },
  edad: { type: String },
  intereses: { type: [String] },
  date: { type: Date, default: Date.now },
});

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

// ⚡ Configuración Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

// ✅ Ruta de prueba
app.get("/", (req, res) => {
  res.send("✅ Backend funcionando con Express, Mercado Pago, YouTube API y MongoDB");
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

// 🎥 Último video de YouTube
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
      res.json({
        videoId: "0OHG46VUJkI",
        title: "Último video TCQ",
        thumbnail: "https://img.youtube.com/vi/0OHG46VUJkI/hqdefault.jpg",
      });
    }
  } catch (error) {
    console.error("❌ Error consultando YouTube:", error);
    res.json({
      videoId: "0OHG46VUJkI",
      title: "Último video TCQ",
      thumbnail: "https://img.youtube.com/vi/0OHG46VUJkI/hqdefault.jpg",
    });
  }
});

// 📨 Guardar suscripción en MongoDB
app.post("/subscribe", async (req, res) => {
  try {
    const { nombre, email, ciudad, edad, intereses } = req.body;

    if (!nombre || !email) {
      return res.status(400).json({ error: "Faltan datos (nombre/email)" });
    }

    const newSub = new Subscriber({ nombre, email, ciudad, edad, intereses });
    await newSub.save();

    console.log("🆕 Nuevo suscriptor:", newSub);
    res.json({ success: true, message: "Suscripción guardada en MongoDB" });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: "Este email ya está suscrito" });
    }
    console.error("❌ Error guardando suscripción:", err);
    res.status(500).json({ error: "Error interno en el servidor" });
  }
});

// 📋 Listar todos los suscriptores
app.get("/subscribers", async (req, res) => {
  try {
    const subs = await Subscriber.find().sort({ date: -1 });
    res.json(subs);
  } catch (err) {
    console.error("❌ Error obteniendo suscriptores:", err);
    res.status(500).json({ error: "Error obteniendo suscriptores" });
  }
});

// 📤 Exportar suscriptores a CSV
app.get("/admin/export-subscribers", async (req, res) => {
  try {
    const subs = await Subscriber.find().sort({ date: -1 });
    const fields = ["nombre", "email", "ciudad", "edad", "intereses", "date"];
    const opts = { fields };
    const parser = new Parser(opts);
    const csv = parser.parse(subs);

    res.header("Content-Type", "text/csv");
    res.attachment("suscriptores.csv");
    return res.send(csv);
  } catch (err) {
    console.error("❌ Error exportando CSV:", err);
    res.status(500).json({ error: "Error exportando CSV" });
  }
});

// 🚀 Levantar servidor
app.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
});
