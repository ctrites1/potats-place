// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "PixelifySans",
      cssVariable: "--font-pixelify-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PixelifySans-VariableFont_wght.ttf"],
            weight: "400 700",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "SuperPixel",
      cssVariable: "--font-super-pixel",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/SuperPixel.ttf"],
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "PixelatedElegance",
      cssVariable: "--font-pixelated-elegance",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PixelatedEleganceRegular.ttf"],
            style: "normal",
          },
        ],
      },
    },
  ],
});
