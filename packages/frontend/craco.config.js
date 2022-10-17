const path = require("path");
const resolvePackage = (relativePath) => path.resolve(__dirname, relativePath);
const { getLoader, loaderByName } = require("@craco/craco");

// const module1 = path.join(__dirname, "../db");
// const module2 = path.join(__dirname, "../design-system");
// const module3 = path.join(__dirname, "../util");

module.exports = {
  // style: {
  //   postcss: {
  //     plugins: [],
  //   },
  // },
  babel: {
		// presets: ['@emotion/babel-preset-css-prop'],
		plugins: [],
		loaderOptions: {
			/* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
		},
		loaderOptions: (babelLoaderOptions, { env, paths }) => {
			return babelLoaderOptions;
		},
  },
  webpack: {
    alias: {
      react: path.resolve("node_modules/react"),
      React: path.resolve("node_modules/react"),
    },
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        console.log("helloooo")
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include
          // .concat(module1)
        //   .concat(module2)
        //   .concat(module3);
      }
      return webpackConfig;
    },
  },
};
