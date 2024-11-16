import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Garantir que o build será gerado no diretório 'dist'
    sourcemap: true, // Caso precise de source maps para depuração
  },
});
