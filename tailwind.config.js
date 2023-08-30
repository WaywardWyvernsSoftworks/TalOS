/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html',   "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#000",
        lime: {
          "100": "rgba(3, 179, 0, 0.25)",
          "200": "rgba(0, 255, 26, 0.25)",
        },
      },
      "fontFamily": {
        "inter": ["Inter", "sans-serif"],
      },
      "borderRadius": {
        "6xl": "25px",
        "81xl": "100px"
      },
      "fontSize": {
        "lg": "18px"
      },
      width: {
        '5vw': '5vw',
        '10vw': '10vw',
        '15vw': '15vw',
        '20vw': '20vw',
        '25vw': '25vw',
        '30vw': '30vw',
        '35vw': '35vw',
        '40vw': '40vw',
        '45vw': '45vw',
        '50vw': '50vw',
        '55vw': '55vw',
        '60vw': '60vw',
        '65vw': '65vw',
        '70vw': '70vw',
        '75vw': '75vw',
        '80vw': '80vw',
        '85vw': '85vw',
        '90vw': '90vw',
        '95vw': '95vw',
        '100vw': '100vw',
      },
      height: {
        '5vh': '5vh',
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '55vh': '55vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '85vh': '85vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '100vh': '100vh',
        
        // 1/8 to 8/8 fractions
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '87.5%',
        '8/8': '100%',

        // 1/12 to 12/12 fractions
        '1/12': '8.33%',
        '2/12': '16.66%',
        '3/12': '25%',
        '4/12': '33.33%',
        '5/12': '41.66%',
        '6/12': '50%',
        '7/12': '58.33%',
        '8/12': '66.66%',
        '9/12': '75%',
        '10/12': '83.33%',
        '11/12': '91.66%',
        '12/12': '100%',

        // 1/14 to 14/14 fractions
        '1/14': '7.14%',
        '2/14': '14.28%',
        '3/14': '21.42%',
        '4/14': '28.57%',
        '5/14': '35.71%',
        '6/14': '42.85%',
        '7/14': '50%',
        '8/14': '57.14%',
        '9/14': '64.28%',
        '10/14': '71.42%',
        '11/14': '78.57%',
        '12/14': '85.71%',
        '13/14': '92.85%',
        '14/14': '100%',

        // 1/16 to 16/16 fractions
        '1/16': '6.25%',
        '2/16': '12.5%',
        '3/16': '18.75%',
        '4/16': '25%',
        '5/16': '31.25%',
        '6/16': '37.5%',
        '7/16': '43.75%',
        '8/16': '50%',
        '9/16': '56.25%',
        '10/16': '62.5%',
        '11/16': '68.75%',
        '12/16': '75%',
        '13/16': '81.25%',
        '14/16': '87.5%',
        '15/16': '93.75%',
        '16/16': '100%',
      },
      backgroundColor: {
        'theme-text': 'var(--theme-text)',
        'theme-flavor-text': 'var(--theme-flavor-text)',
        'theme-accent': 'var(--theme-accent)',
        'theme-italic': 'var(--theme-italic)',
        'theme-text-hover': 'var(--theme-text-hover)',
        'theme-root': 'var(--theme-root)',
        'theme-button': 'var(--theme-button)',
        'theme-bright-color': 'var(--theme-bright-color)',
        'theme-box': 'var(--theme-box)',
        'theme-hover-pos': 'var(--theme-hover-pos)',
        'theme-hover-neg': 'var(--theme-hover-neg)',
        'theme-border': 'var(--theme-border)',
      },
      textColor: {
        'theme-text': 'var(--theme-text)',
        'theme-flavor-text': 'var(--theme-flavor-text)',
        'theme-accent': 'var(--theme-accent)',
        'theme-italic': 'var(--theme-italic)',
        'theme-text-hover': 'var(--theme-text-hover)',
        'theme-root': 'var(--theme-root)',
        'theme-button': 'var(--theme-button)',
        'theme-bright-color': 'var(--theme-bright-color)',
        'theme-box': 'var(--theme-box)',
        'theme-hover-pos': 'var(--theme-hover-pos)',
        'theme-hover-neg': 'var(--theme-hover-neg)',
        'theme-border': 'var(--theme-border)',
      },
      borderColor: {
        'theme-text': 'var(--theme-text)',
        'theme-flavor-text': 'var(--theme-flavor-text)',
        'theme-accent': 'var(--theme-accent)',
        'theme-italic': 'var(--theme-italic)',
        'theme-text-hover': 'var(--theme-text-hover)',
        'theme-root': 'var(--theme-root)',
        'theme-button': 'var(--theme-button)',
        'theme-box': 'var(--theme-box)',
        'theme-hover-pos': 'var(--theme-hover-pos)',
        'theme-hover-neg': 'var(--theme-hover-neg)',
        'theme-border': 'var(--theme-border)',
      },
      backdropBlur: {
        'theme-blur': 'var(--theme-blur)',
      },
      borderWidth: {
        'theme-border-width': 'var(--theme-border-width)',
      },
      borderRadius: {
        'theme-border-radius': 'var(--theme-border-radius)',
      },
    },
  },
  variants: {
      extend: {
        backdropBlur: ['responsive'],
      },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
});
