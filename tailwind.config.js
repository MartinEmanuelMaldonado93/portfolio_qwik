/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx,mdx}"];
export const theme = {
  extend: {
    colors: {
      primary: "hsl(34,145%,3%)",
      secondary: "hsl(182, 39%, 47%)",
      "gray-transparent": "hsla(0,0%,83%,.1)",
      "black-transparent": "hsla(0,0%,0%, .3)",
    },
  },
};
export const plugins = [];
