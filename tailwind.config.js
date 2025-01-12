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
          50: '#783c5c05', // 5% opacity
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
        google: {
          DEFAULT: '#4285F4',
          900: '#4285F490'
        }
      },
      fontFamily: {
        butterChicken: ['var(--font-butter-chicken)', 'sans-serif'], // Fallback font
        gentiumPlus: ['var(--font-gentium-plus)', 'cursive'], // Fallback font
        montserrat: ['var(--font-montserrat)', 'sans-serif']
      }}
  },
  plugins: [],
}

