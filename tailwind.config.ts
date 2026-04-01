import type { Config } from "tailwindcss";

import { themeExtend } from "./theme/tailwind.extend";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const nativewind = require("nativewind/preset");

const config = {
  content: [
    "./App.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./screens/**/*.{js,ts,tsx}",
  ],
  presets: [nativewind],
  theme: {
    extend: themeExtend,
  },
  plugins: [],
} satisfies Config;

export default config;
