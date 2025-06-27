import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import vitesconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitesconfigPaths()],
  server: {
    open: true,
    port: 3000,
  },
  /* eslint-disable no-undef */
  resolve: {
    alias: {
      "@design": path.resolve(__dirname, "./src/design"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@mocks": path.resolve(__dirname, "./src/mocks"),
      "@ptypes": path.resolve(__dirname, "./src/types"),
      "@forms": path.resolve(__dirname, "./src/shared/forms"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@enum": path.resolve(__dirname, "./src/enum"),
      "@events": path.resolve(__dirname, "./src/events"),

    },
  },
});
