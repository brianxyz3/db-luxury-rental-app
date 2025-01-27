/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homePageHeaderImg: 'url("../src/assets/images/heroImg.jpg")',
        servicePageHeaderImg: 'url("../src/assets/images/serviceImg.jpg")',
      },
    },
  },
  plugins: [],
};
