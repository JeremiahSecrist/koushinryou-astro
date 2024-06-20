/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "jp-waves": "url('/assets/pattern.svg')",
      },
      colors: { 
        text: {
          50: "oklab(96.12% 0.000 0.00)",
          100: "oklab(92.49% 0.000 0.00)",
          200: "oklab(84.52% 0.000 0.00)",
          300: "oklab(76.68% 0.000 0.00)",
          400: "oklab(68.30% 0.000 0.00)",
          500: "oklab(59.99% 0.000 0.00)",
          600: "oklab(51.03% 0.000 0.00)",
          700: "oklab(42.02% 0.000 0.00)",
          800: "oklab(32.11% 0.000 0.00)",
          900: "oklab(21.78% 0.000 0.00)",
          950: "oklab(15.91% 0.000 0.00)",
        },
        background: {
          50: "oklab(96.73% 0.000 0.01)",
          100: "oklab(93.61% -0.001 0.02)",
          200: "oklab(86.88% -0.002 0.03)",
          300: "oklab(80.32% -0.004 0.05)",
          400: "oklab(73.47% -0.004 0.06)",
          500: "oklab(66.66% -0.007 0.08)",
          600: "oklab(56.68% -0.004 0.06)",
          700: "oklab(46.38% -0.005 0.05)",
          800: "oklab(35.22% -0.003 0.04)",
          900: "oklab(23.45% -0.002 0.02)",
          950: "oklab(16.74% -0.002 0.01)",
        },
        primary: {
          50: "oklab(97.90% -0.001 0.02)",
          100: "oklab(96.13% -0.002 0.05)",
          200: "oklab(92.30% -0.002 0.10)",
          300: "oklab(88.95% -0.002 0.13)",
          400: "oklab(85.89% 0.003 0.16)",
          500: "oklab(83.13% 0.015 0.17)",
          600: "oklab(70.37% 0.012 0.14)",
          700: "oklab(56.99% 0.009 0.12)",
          800: "oklab(42.78% 0.006 0.09)",
          900: "oklab(27.49% -0.000 0.06)",
          950: "oklab(18.89% -0.002 0.04)",
        },
        secondary: {
          50: "oklab(97.54% -0.001 0.02)",
          100: "oklab(95.14% -0.002 0.04)",
          200: "oklab(90.43% -0.004 0.07)",
          300: "oklab(85.78% -0.006 0.11)",
          400: "oklab(81.29% -0.005 0.13)",
          500: "oklab(77.06% -0.000 0.15)",
          600: "oklab(65.30% -0.001 0.12)",
          700: "oklab(53.09% -0.001 0.10)",
          800: "oklab(40.12% -0.001 0.07)",
          900: "oklab(25.88% -0.002 0.04)",
          950: "oklab(18.27% -0.002 0.03)",
        },
        accent: {
          50: "oklab(96.24% -0.011 -0.02)",
          100: "oklab(92.49% -0.022 -0.03)",
          200: "oklab(85.22% -0.043 -0.06)",
          300: "oklab(78.37% -0.060 -0.09)",
          400: "oklab(71.90% -0.070 -0.13)",
          500: "oklab(66.43% -0.069 -0.15)",
          600: "oklab(56.40% -0.058 -0.13)",
          700: "oklab(46.10% -0.048 -0.10)",
          800: "oklab(34.97% -0.037 -0.07)",
          900: "oklab(22.82% -0.024 -0.04)",
          950: "oklab(15.91% -0.018 -0.02)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
