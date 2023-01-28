/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        colors: {
            "primary-beige":"#F0F0FB",
            "primary-purple":"#B4BAF9",
            "light-purple":"#CDD5FB",
            "primary-pink":"#E1D1F4",
            "pinky-purple":"#C8B9F8",
            "dark-purple":"#9400FF",
            "black-purple":"#340072",
            "primary-black":"#1A0532",
            
      },
    },
  },
  plugins: [],
}
