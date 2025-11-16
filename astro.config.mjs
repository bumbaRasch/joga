// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        defaultLocale: "en",
        locales: ["en", "de", "ru", "tr", "es"],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    output: "static",
    // GitHub Pages configuration
    site: "https://bumbarasch.github.io/joga",
    // Use base path only in production for development convenience
    base: import.meta.env.PROD ? "/joga" : "/",
});