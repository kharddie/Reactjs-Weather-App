//const debug = process.env.NODE_ENV !== "production"; //if developement
//console.log("This is the Webpack 4 testing 'mode':" + process.env.NODE_ENV !== "production");
const webpack = require('webpack');
const merge = require("webpack-merge");
const path = require('path');
const CleanWebpackPlugin = require("clean-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "dist"),
};
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const parts = require("./webpack.parts");





const commonConfig = merge([
  {
    context: PATHS.app,

    plugins: [
      new HtmlWebpackPlugin({
        template: 'templates/index.template.ejs',
        inject: 'body',
      }),
      new CleanWebpackPlugin(PATHS.build),
    ],

    entry: [
      'react-hot-loader/patch',
      './js/index.js'
    ],

    output: {
      path: PATHS.build,
      filename: "client.min.js"
    },

    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
  },

  parts.loadJavaScript({ include: PATHS.app }),
  parts.loadCSS(),
  parts.loadImages(),
  
]);



//::::PRODUCTION::::
const productionConfig = merge(
  [

   


  ]);


//::::DEVELPMENT::::
const developmentConfig = merge(
  [
    parts.devServer({
      inline: true,
      host: '127.0.0.1', // in this section, I have tried to change IP address by server IP
      port: 3000
    }),
    parts.setFreeVariable("ENVPROD", "hello from production config"),

  ]);




module.exports = mode => {

  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
