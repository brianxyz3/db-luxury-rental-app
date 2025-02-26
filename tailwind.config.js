/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        contactPageHeaderImg: 'url("../src/assets/images/tableImg.jpg")',
      },
    },
  },
  plugins: [],
};
