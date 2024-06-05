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
        "sm": "470px",

        "md": "768px",

        "lg": "1151px",

        "xl": "1530px",

        "2xl": "1600px",
      },
      maxWidth: {
        "6xl": "81rem",
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
