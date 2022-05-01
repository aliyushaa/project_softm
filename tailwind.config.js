const {join} = require('path');

module.exports = {
    mode: 'jit',
    content: [
        join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
        join(__dirname, "./components/**/*.{js,ts,jsx,tsx}",),
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                pulse: {
                    "0%, 100%": {
                        opacity: 1,
                    },
                    "50%": {
                        opacity: 0.5,
                    },
                },
            },
            animation: {
                pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
        },
        fontFamily: {
            body: ['Open Sans', 'sans-serif'],
        },
    },
    variants: {
        extend: {},
        scrollbar: ["rounded"],
    },
    plugins: [
        require("tailwind-scrollbar-hide"),
        require("@tailwindcss/forms"),
        require("tailwind-scrollbar"),
    ],
};
  