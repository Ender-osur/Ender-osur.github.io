import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xsm': { 'raw': '(min-width: 420px)' }, 
        '2xlh': { 'raw': '(min-height: 1300px)' }, 
        'xlh': { 'raw': '(min-height: 1100px)' }, 
        'lgh': { 'raw': '(min-height: 900px)' }, 
        'mdh': { 'raw': '(min-height: 700px)' }, 
        'smh': { 'raw': '(min-height: 500px)' }, 
      },
    },
  },
  plugins: [],
};
export default config;
