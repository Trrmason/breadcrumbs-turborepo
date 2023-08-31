import { withThemeByDataAttribute } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../stories/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        xsm: {
          name: "xsm",
          styles: {
            width: "420px",
            height: "100%",
          },
        },
        sm: {
          name: "sm",
          styles: {
            width: "640px",
            height: "100%",
          },
        },
        md: {
          name: "md",
          styles: {
            width: "768px",
            height: "100%",
          },
        },
        lg: {
          name: "lg",
          styles: {
            width: "1024px",
            height: "100%",
          },
        },
        xl: {
          name: "xl",
          styles: {
            width: "1280px",
            height: "100%",
          },
        },
        "2xl": {
          name: "2xl",
          styles: {
            width: "1536px",
            height: "100%",
          },
        },
      },
      defaultViewport: "xl",
    },
  },
};
export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "theme-light",
      sand: "theme-sand",
      dark: "theme-dark",
      pastel: "theme-pastel",
      vibrant: "theme-vibrant",
      sunsetGlow: "theme-sunsetGlow",
      greenForest: "theme-greenForest",
      gentlePink: "theme-gentlePink",
      mysticPurple: "theme-mysticPurple",
      earthyBrowns: "theme-earthyBrowns",
      freshMint: "theme-freshMint",
      electricBlue: "theme-electricBlue",
      redAlert: "theme-redAlert",
      goldenGlam: "theme-goldenGlam",
    },
    defaultTheme: "light",
    attributeName: "class",
  }),
];

export default preview;
