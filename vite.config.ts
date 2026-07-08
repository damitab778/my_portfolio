/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/my_portfolio/" : "/",
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    globals: true,
  },
}));
