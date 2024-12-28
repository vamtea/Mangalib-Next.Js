import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": "0 1px 3px rgba(0, 0, 0, 0.12)",
        "catalogDropShadow": "0 4px 16px rgba(0, 0, 0, .2)",
        "translateCard": "rgba(0, 0, 0, .12) 0 1px 3px"
      },
      backgroundImage: {
        "updates-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .18) 24px, transparent)",
          "gradientManga": "linear-gradient(to top, rgba(0, 0, 0, .9), transparent)"
      },
      transform: {
        "custom-rotate-translate": "rotate(-10deg) translate(-60px, -20px)",
      },
      maxHeight: {
        "profileSticky": "calc(100vh-56px-var(16px * 2)"

      },
      backgroundColor: {
        "filtersButton": "rgba(116, 116, 128, 0.05)",
        
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",

      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar"), 
    function ({ addComponents }: { addComponents: (components: object) => void }) {
      addComponents({
        '.scrollbar-hide': {
          '/* Останавливает отображение полос прокрутки */': {
            '&::-webkit-scrollbar': {
              width: '0px',
              height: '0px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
          },
        },
      })
    },
  ]
} satisfies Config;
