const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "awesome-typescript-loader"
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html")
    })
  ]
};
