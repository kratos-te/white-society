/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
   "./pages/**/*.{js,ts,jsx,tsx}",
   "./components/**/*.{js,ts,jsx,tsx}",
   "./public/**/*.html",
 ],
 theme: {
   extend: {
    screens: {
      sm: "480px",
      xs: "640px", // Custom small breakpoint
      md: "768px", // Custom medium breakpoint
      lg: "1080px", // Custom large breakpoint
      xl: "1240px", // Custom extra large breakpoint
      xld: "1440px",
      "2xl": "1648px",
      "2xld": "1700px",
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
    },
    textColor: {
     'main': '#5051F9',
     'main-gray': '#363740'
    },
     backgroundColor: {
      'main': '#5051F9',
     'landing-lady-bg': '#F9F9FF'
    }
   },
 },
 plugins: [
  require("flowbite/plugin")
],
}