/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ["class"],
    content: [
      "./components/**/*.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx,mdx}",
    ],
    prefix: "",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: "#6366f1",
          primaryLight: "#818cf8",
          primaryDark: "#4f46e5",
          primaryForeground: "#ffffff",
          secondary: "#8b5cf6",
          secondaryLight: "#a78bfa",
          secondaryDark: "#7c3aed",
          secondaryForeground: "#ffffff",
          accent: "#ec4899",
          accentLight: "#f472b6",
          accentDark: "#db2777",
          accentForeground: "#ffffff",
          destructive: "hsl(var(--destructive))",
          muted: "hsl(var(--muted))",
          popover: "hsl(var(--popover))",
          card: "hsl(var(--card))",
          dark: {
            100: "#e5e7eb",
            200: "#d1d5db",
            300: "#9ca3af",
            400: "#6b7280",
            500: "#4b5563",
            600: "#374151",
            700: "#1f2937",
            800: "#111827",
            900: "#030712",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          shimmer: {
            "100%": {
              transform: "translateX(100%)",
            },
          },
          "background-shine": {
            from: {
              backgroundPosition: "0 0",
            },
            to: {
              backgroundPosition: "-200% 0",
            },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          shimmer: "shimmer 2s infinite",
          "background-shine": "background-shine 2s linear infinite",
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "hero-pattern": "url('/hero-pattern.svg')",
          "dots-pattern": "url('/dots-pattern.svg')",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  };
  
  export default config;
  