import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0b5ed7", dark: "#0a3d8f", light: "#e8f1ff" },
        accent: { DEFAULT: "#ff7a00", dark: "#e06a00" },
        ink: "#1c2333",
      },
      fontFamily: { sans: ["var(--font-poppins)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
