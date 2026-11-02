import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1747a6", dark: "#0a2a66", light: "#e9eff9" },
        accent: { DEFAULT: "#2563eb", dark: "#1d4ed8" },
        ink: "#0b1733",
        navy: "#0a2a66",
      },
      fontFamily: { sans: ["var(--font-poppins)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
