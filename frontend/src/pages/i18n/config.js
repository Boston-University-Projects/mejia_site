import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";



i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'es'],
        fallbackLng: "en",
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage','path', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '../backend/languages/{{lng}}/translation.json',
        },
    });

export default i18n;