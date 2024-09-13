import { defineConfig } from "vite";
import { vitePlugin } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [vitePlugin(), tsconfigPaths()],
});
