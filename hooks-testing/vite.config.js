import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTest.js", // Gives expect() all the DOM assertion methods needed for testing react components.
  },
  server: {
    open: true,
    host: true,
  },
});
