import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      keyframes: {
        ping: {
          "75%,100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
      },
      colors: {
        "red-orange": {
          500: "color-mix(in srgb, theme('colors.red.500') 50%, theme('colors.orange.500') 50%)",
        },
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
