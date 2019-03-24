const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/* eslint-disable */
const getConfig = env => {
  let configName = "dev";

  if (env.config) {
    configName = env.config;
  }

  const fullConfigName = `${configName}.env.js`;

  return require(path.join(__dirname, "config", fullConfigName));
};
/* eslint-enable */

module.exports = env => ({
  output: {
    path: path.join(__dirname, "build")
    // publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": getConfig(env)
    }),
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "index.html"),
      filename: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new CopyWebpackPlugin([
      {
        from: "static",
        to: "static"
      }
    ])
  ]
});
