import { dirname, join } from "path";

module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    {
      name: "@storybook/addon-styling",
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: {
          implementation: require.resolve("postcss"),
        },
      },
    },
  ],
  framework: getAbsolutePath("@storybook/react-vite"),
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: getAbsolutePath("@storybook/builder-vite"),
  },
  docs: {
    autodocs: "tag",
  },
};

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
