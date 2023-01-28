/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBeige: "#F0F0FB",
        primaryPurple: "#B4BAF9",
        lightPurple: "#CDD5FB",
        primaryPink: "#E1D1F4",
        pinkyPurple: "#C8B9F8",
        darkPurple: "#9400FF",
        blackPurple: "#340072",
        primaryBlack: "#1A0532",
        linearPurple: "#F3EAFF",
      },
    },
  },
  plugins: [],
};
