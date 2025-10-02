// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa los archivos de traducción
import es from "./locales/es.json";
import en from "./locales/en.json";
import pt from "./locales/pt.json";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    pt: { translation: pt },
  },
  lng: "es", // idioma por defecto
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
