import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-black":"#0C0D08",
        // "primary":"#C92828",
        "primary":"#3d8054",
      },
      fontFamily: {
        "Noto-sans": ["Noto Sans", "sans-serif"],
        "Roboto":["Roboto", "sans-serif"],
        "Oswald":["Oswald", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
