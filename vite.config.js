import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://charlcharlo.github.io/Sne17/",
  plugins: [react()],
});
