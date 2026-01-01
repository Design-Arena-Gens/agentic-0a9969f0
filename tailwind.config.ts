import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f5f6fc",
          100: "#ecedfa",
          200: "#d8dbf4",
          300: "#b4b9eb",
          400: "#8b93df",
          500: "#676fcd",
          600: "#4d52b2",
          700: "#3d4190",
          800: "#323674",
          900: "#2e315f"
        }
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"]
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(circle at 20% 20%, rgba(121,80,242,0.35), transparent 45%), radial-gradient(circle at 80% 10%, rgba(56,188,250,0.35), transparent 40%), radial-gradient(circle at 50% 80%, rgba(250,151,56,0.25), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
