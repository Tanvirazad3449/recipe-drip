/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brandColor: {
          DEFAULT: '#783c5c', // base color
          100: '#783c5c10', // 10% opacity
          200: '#783c5c20', // 20% opacity
          300: '#783c5c30', // 30% opacity
          400: '#783c5c40', // 40% opacity
          500: '#783c5c50', // 50% opacity
          600: '#783c5c60', // 60% opacity
          700: '#783c5c70', // 70% opacity
          800: '#783c5c80', // 80% opacity
          900: '#783c5c90', // 90% opacity
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      }}
  },
  plugins: [],
}

