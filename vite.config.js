import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Ensures the server is accessible on the network
    port: 5173, // Default Vite port, or you can choose another
  },
});
