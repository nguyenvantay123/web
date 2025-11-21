import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // gốc dự án React
  build: {
    rollupOptions: {
      input: {
        main: "public/home.html",
      }
    }
  }
});
