import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: { quietDeps: true },
    },
  },
  plugins: [vue()],
  server: {
    host: true,
  },
});
