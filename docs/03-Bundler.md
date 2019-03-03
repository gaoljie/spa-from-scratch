## install webpack

```
yarn add webpack webpack-cli --dev
```

## install loader

`yarn add awesome-typescript-loader --dev`

## webpack config

create webpack.config.js in the root directory, webpack will use ./src/index.js as an entry file to bundle up all files into ./dist folder, we use **awesome-typescript-loader** to transform code to es5 code, so browser can run the code without crashing.

```
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
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
  }
};
```

## install html-webpack-plugin

```
yarn add html-webpack-plugin --dev
```

this webpack plugin generate an html file as an entry webpage file into `./dist` folder.

```js
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
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
```

to webpack.config.js file.

you can specify an html file as the template, which we will create next chapter

## install webpack-dev-server

The `webpack-dev-server` provides you with a simple web server and the ability to use live reloading.

```
yarn add webpack-dev-server --dev
```

add the following code to package.json

```
"scripts": {
  "start": "webpack-dev-server --mode development --open --hot --config webpack.config.js"
},
```

## webpack build

first install rimraf, it is an alternative to the `rm -rf` shell command, it can delete the folder you want cross-platform so you don't need to run different command in Windows OS or other Unix Style OS.

```
yarn add rimraf —dev
```

add npm script in package.json

```
"build": "rimraf dist && webpack --mode production --config webpack.config.js"
```
