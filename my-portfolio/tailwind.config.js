/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: 'rgb(250, 124, 45)',
        customGray: 'rgb(143, 150, 156)',
        customLightGray: 'rgb(242,242,242)',
        customLighterGray: 'rgb(231, 232, 223)',
        customDarkGray: 'rgb(54, 54, 54)',
      },
      fontFamily: {
        'main': ['Space Grotesk', 'sans-serif']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
}
