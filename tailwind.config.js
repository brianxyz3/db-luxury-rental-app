/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homePageHeaderImg: 'url("../src/assets/images/altHeroImg.jpg")',
        servicePageHeaderImg: 'url("../src/assets/images/serviceImg.jpg")',
        contactPageHeaderImg: 'url("../src/assets/images/tableImg.jpg")',
      },
    },
  },
  plugins: [],
};
