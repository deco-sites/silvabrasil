import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1334px",
    },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
        blink: "blink 1s forwards",
      },
    },
    colors: {
      "green-100": "#CEE1B6",
      "green-200": "#99B8B1",
      "green-500": "#85B549",
      "green-600": "#6B8E23",
      "green-900": "#004D3D",
      dark: "#001A14",
      slate: "#FEF5E6",
      white: "#FDFDFD",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Rufina"],
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
};
