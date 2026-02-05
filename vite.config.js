import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",

      // 🔥 REQUIRED FOR LOCALHOST INSTALL
      devOptions: {
        enabled: true,
      },

      manifest: {
        name: "My React App",
        short_name: "ReactApp",
        start_url: "/", // 👈 IMPORTANT
        display: "standalone",
        background_color: "#ffffff", // 👈 IMPORTANT
        theme_color: "#2563eb",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
