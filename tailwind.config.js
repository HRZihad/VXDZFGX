/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        screens: {
          'sm': '500px',
          'md': '1440px',
          'lg': '1200px',
          'xl': '1600px',
        },
      },
    },
    plugins: [
      
    ],
    corePlugins: {
      preflight: false
    }
  };
  