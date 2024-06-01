import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      colors: {
        "green-500": "#85B549",
        "green-600": "#6B8E23",
        "green-900": "#004D3D",
        "slate": "#FEF5E6",
        "white": "#FDFDFD",
      },
      screens: {
        "sm": "640px",

        "md": "768px",

        "lg": "1024px",

        "xl": "1550px",

        "2xl": "1600px",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
