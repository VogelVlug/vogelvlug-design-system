/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    borderRadius: {
      none: "0",
      sm: "0.25rem",
      md: "0.5rem",
      DEFAULT: "0.5rem",
      lg: "1rem",
      full: "9999px",
    },
    colors: {
      base: {
        transparent: "transparent",
        white: "rgb(var(--base-white) / <alpha-value>)",
        black: "rgb(var(--base-black) / <alpha-value>)",
      },
      main: {
        100: "var(--main-100)",
        200: "var(--main-200)",
        300: "var(--main-300)",
        400: "var(--main-400)",
        500: "var(--main-500)",
        600: "var(--main-600)",
        700: "var(--main-700)",
      },
      accent: {
        100: "var(--accent-100)",
        200: "var(--accent-200)",
        300: "var(--accent-300)",
        400: "var(--accent-400)",
        500: "var(--accent-500)",
        600: "var(--accent-600)",
        700: "var(--accent-700)",
      },
      neutral: {
        100: "var(--neutral-100)",
        200: "var(--neutral-200)",
        300: "var(--neutral-300)",
        400: "var(--neutral-400)",
        500: "var(--neutral-500)",
        600: "var(--neutral-600)",
        700: "var(--neutral-700)",
      },
      success: {
        100: "var(--success-100)",
        200: "var(--success-200)",
        300: "var(--success-300)",
        400: "var(--success-400)",
        500: "var(--success-500)",
        600: "var(--success-600)",
        700: "var(--success-700)",
      },
      warning: {
        100: "var(--warning-100)",
        200: "var(--warning-200)",
        300: "var(--warning-300)",
        400: "var(--warning-400)",
        500: "var(--warning-500)",
        600: "var(--warning-600)",
        700: "var(--warning-700)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3rem",
      },
      spacing: {
        "col-width": "var(--column-base-width)",
        "col-gutter": "var(--column-base-gutter)",
      },
      textColor: {
        default: "var(--text-default)",
        title: "var(--text-title)",
        subtitle: "var(--text-subtitle)",
        overtitle: "var(--text-overtitle)",
        "color-main": "var(--text-color-main)",
        "color-accent": "var(--text-color-accent)",
        caption: "var(--text-caption)",
        "fill-main-onfill": "var(--fill-main-onfill)",
        "fill-accent-onfill": "var(--fill-accent-onfill)",
      },
      backgroundColor: {
        transparent: "transparent",
        default: "var(--background-default)",
        subtle: "var(--background-subtle)",
        surface: "var(--surface-default)",
        "fill-main": "var(--fill-main)",
        "fill-main-hover": "var(--fill-main-hover)",
        "fill-accent": "var(--fill-accent)",
        "fill-accent-hover": "var(--fill-accent-hover)",
        "fill-warning": "var(--fill-warning)",
        "fill-warning-hover": "var(--fill-warning-hover)",
      },
      borderColor: {
        main: "var(--border-color-main)",
        accent: "var(--fill-accent)",
        default: "var(--border-default)",
      },
      colors: {
        background: "var(--background-default)",
        foreground: "var(--text-default)",
        card: {
          DEFAULT: "var(--surface-default)",
          foreground: "var(--text-default)",
        },
        popover: {
          DEFAULT: "var(--surface-default)",
          foreground: "var(--text-default)",
        },
        primary: {
          DEFAULT: "var(--fill-main)",
          foreground: "var(--fill-main-onfill)",
        },
        secondary: {
          DEFAULT: "var(--fill-accent)",
          foreground: "var(--fill-accent-onfill)",
        },
        muted: {
          DEFAULT: "var(--background-subtle)",
          foreground: "var(--text-default)",
        },
        accent: {
          DEFAULT: "var(--neutral-200)",
          foreground: "var(--text-default)",
        },
        destructive: {
          DEFAULT: "var(--fill-warning)",
          foreground: "var(--fill-warning-onfill)",
        },
        border: "var(--border-default)",
        input: "var(--border-default)",
        ring: "var(--neutral-200)",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        expand: {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        collapse: {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        expand: "expand 300ms ease-out",
        collapse: "collapse 300ms ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
