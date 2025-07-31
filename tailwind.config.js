/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1e40af', // Deep blue
          700: '#3b82f6', // Medium blue
          400: '#60a5fa', // Light blue
        },
        secondary: {
          900: '#0f172a', // Dark accent
          800: '#1e293b', // Slightly lighter dark accent
        },
        light: {
          100: '#ffffff',
          200: '#f8fafc',
          300: '#e2e8f0',
        },
        accent: {
          500: '#f59e0b', // Gold/Orange
        },
      },
      boxShadow: {
        'soft-lg': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
        'gradient-radial': 'radial-gradient(circle at 50% 50%, #60a5fa 0%, #1e40af 100%)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      borderRadius: {
        'glass': '1.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Roboto', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};