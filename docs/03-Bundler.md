## install webpack

`yarn add webpack webpack-cli webpack-merge --dev`

## install babel

`yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react --dev`

- **babel-core:** Transforms ES6 code to ES5
- **babel-loader:** Webpack helper to transpile code, given the the preset.
- **babel-preset-env**: Preset which helps babel to convert ES6, ES7 and ES8 code to ES5.
- **babel-preset-react:** Preset which Transforms JSX to JavaScript.

## babel config

we need to create .babelrc file in the root directory, so babel knows how to transpile our .js and .jsx code

```js
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

remember the preset ordering is from right to left, so babel will use **react** preset first to transform the code

## webpack config

create build folder `mkdir build`

create webpack.common.js under build folder, webpack will use ./src/index.jsx as an entry file to bundle up all files into ./dist folder, we use babel-loader to transform es6 style and jsx style code to es5 code, so browser can run the code without crashing.

```js
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "../src/index.jsx"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[contenthash:6].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```

create webpack.dev.js for development environment

```js
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map"
});
```

create webpack.prod.js for production environment

```js
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      vendor: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
});
```

## install html-webpack-plugin

`yarn add html-webpack-plugin --dev`

this webpack plugin generate an html file as an entry webpage file into `./dist` folder.

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "../src/index.jsx"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[contenthash:6].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html")
    })
  ]
};
```

you can specify an html file as the template, which we will create next chapter

## install webpack-dev-server

The `webpack-dev-server` provides you with a simple web server and the ability to use live reloading.

`yarn add webpack-dev-server --dev`

add the following code to package.json

```js
"scripts": {
  "start": "webpack-dev-server --open --config build/webpack.dev.js",
},
```

## webpack build

first install rimraf, it is an alternative to the `rm -rf` shell command, it can delete the folder you want cross-platform so you don't need to run different command in Windows OS or other Unix Style OS.

`yarn add rimraf —dev`

add npm script in package.json

`"build": "rimraf dist && webpack --config build/webpack.prod.js"`

## install nodemon

`yarn add nodemon --dev`

change npm script

```js
"start": "nodemon --watch build --exec \"webpack-dev-server --open --config build/webpack.dev.js\"",
```
