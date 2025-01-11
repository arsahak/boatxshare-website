"use client";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpBackend) // Load translation files
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Initialize i18next
  .init({
    fallbackLng: "en", // Default language
    supportedLngs: ["en", "es", "fr", "ja", "pt"], // List of supported languages
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to translation files
    },
  });

export default i18n;
