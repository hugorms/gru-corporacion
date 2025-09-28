/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          50: "#f6f8fb",
          100: "#ecf1f6",
          200: "#d5e1ec",
          300: "#b2c9db",
          400: "#89abc7",
          500: "#6a92b6",
          600: "#557da7",
          700: "#486b96",
          800: "#3f5b7c",
          900: "#2a3b55",
          950: "#1d2a3f",
        },
        secondary: {
          50: "#f7f9fb",
          100: "#eff3f7",
          200: "#dce6ed",
          300: "#c1d2df",
          400: "#a0b8cc",
          500: "#b2bdce",
          600: "#7691a8",
          700: "#657f98",
          800: "#55697e",
          900: "#485768",
          950: "#2f3a47",
        },
        accent: {
          50: "#fefbf5",
          100: "#fdf5e9",
          200: "#fbe9c9",
          300: "#f8d7a3",
          400: "#f4be6c",
          500: "#f0a43f",
          600: "#e28b26",
          700: "#b8872a",
          800: "#966f2a",
          900: "#7a5c26",
          950: "#422f12",
        }
      }
    },
  },
  plugins: [],
}
