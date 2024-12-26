/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        background : {
          DEFAULT : "var(--background)",
          content : "var(--background-content)"
        },
        primary : {
          DEFAULT : "var(--primary)",
          content : "var(--primary-content)"
        },
        secondary : {
          DEFAULT : "var(--secondary)",
          content : "var(--secondary-content)"
        },
        card : {
          DEFAULT : "var(--card)",
          content : "var(--card-content)"
        }

      }
    },
  },
  plugins: [],
}