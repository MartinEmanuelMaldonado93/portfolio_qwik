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
    backgroundImage: {
      "grid-gray": `
        linear-gradient(90deg, 
          rgba(204, 204, 204, 0.03) 1px, 
          transparent 1px), 
        linear-gradient(
          rgba(204, 204, 204, 0.03) 1px, 
          transparent 1px)`,
    },
    backgroundSize: { "grid-size": "50px 50px" },
    fontFamily: {
      grotesk: [
        "grotesk",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },
};
export const plugins = [];
