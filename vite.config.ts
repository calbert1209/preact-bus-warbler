import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const baseConfig = {
    plugins: [preact()],
  };
  if (command === "serve") {
    return baseConfig;
  } else {
    return {
      ...baseConfig,
      base: "/preact-bus-warbler/",
    };
  }
});
