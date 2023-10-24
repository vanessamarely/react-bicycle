import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dependencies } from "./package.json";
import { firebaseConfig } from "./src/firebase";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
    rollupOptions: {
      input: {
        main: "./index.html",
        auth: "./src/pages/Login.jsx",
        app: "./src/App.jsx",
      },
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-router-dom",
            "react-dom",
            "firebase/app",
            "firebase/auth",
            "firebase/firestore",
          ],
        },
      },
    },
  },
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  define: {
    "process.env.FIREBASE_CONFIG": JSON.stringify(firebaseConfig),
  },
});
