var webpack = require('webpack');
var path = require("path");
module.exports = {
    entry: "./runoob1.js",
    /* output: {
     path: 'dist/js',
     filename: "bundle.js"
     },*/
    output: {
        path: path.resolve('', "build"),
        publicPath: "/assets/",
        filename: "bundles.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
        ]
    },

    plugins: [
        new webpack.BannerPlugin('菜鸟教程 webpack 实例')
    ]
};

/*

 var webpack=require('webpack');
 var path = require("path");

 module.exports = {
 entry: "./runoob1.js",
 output: {
 path: __dirname,
 filename: "bundle.js"
 },
 devServer: {
 contentBase: "./",
 compress: true,
 port: 9000
 },
 module: {
 loaders: [
 { test: /\.css$/, loader: "style!css" }
 ]
 },
 plugins:[
 new webpack.BannerPlugin('菜鸟教程 webpack 实例')
 ]
 };*/
