/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "820px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        Pink: "hsl(322, 100%, 66%)",
        LightPink: "hsl(321, 100%, 78%)",
        LightRed: "hsl(0, 100 %, 63 %)",
        VeryDarkCyan: "hsl(192, 100%, 9%)",
        VeryPaleBlue: "hsl(207, 100%, 98%)",
      },
      fontFamily: {
        sans: ["Poppins", "Open Sans"],
      },

      backgroundImage: {
        Users: "url('../images/bg-section-top-desktop-1.svg')",
        Usersmobile: "url('../images/bg-section-top-mobile-1.svg')",
        Growmobile: "url('../images/bg-section-top-mobile-2.svg')",
        Grow: "url('../images/bg-section-top-desktop-2.svg')",
        footermobile: "url('../images/bg-footer-top-mobile.svg')",
        footer: "url('../images/bg-footer-top-desktop.svg')",
      },
    },
  },
  plugins: [],
};
