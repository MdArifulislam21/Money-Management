import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // mode can be 'development' or 'production'
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    build: {
      lib: {
      entry: "src/embed.jsx",
      name: "ChatbotWidget",
      fileName: "chatbot",
      formats: ["iife"], // script usable via <script>
    },
      outDir: 'dist',
      sourcemap: !isProduction, // Generate source maps in dev only
    },
    resolve: {
      alias: {
        '@': '/src', // Optional: makes imports easier
      },
    },
  };
});


