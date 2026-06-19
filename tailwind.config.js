export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"]
      },
      colors: {
        ink: "#17201b",
        moss: "#46624a",
        saffron: "#e49b32",
        berry: "#9f3152",
        ocean: "#286f80",
        cloud: "#f6f7f2"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(28, 40, 32, 0.12)"
      }
    }
  },
  plugins: []
};
