const solid = require("vite-plugin-solid");
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-console",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],

  framework: "@storybook/html",
  core: {
    builder: "@storybook/builder-vite",
  },

  features: {
    storyStoreV7: true,
  },

  async viteFinal(config, { configType }) {
    config.resolve.alias = { "@": path.resolve(__dirname, "../src") };
    config.plugins.unshift(solid({ hot: false }));

    return config;
  },
};
