/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerImg: 'url("../src/assets/images/heroImg.jpg")',
      },
    },
  },
  plugins: [],
};
