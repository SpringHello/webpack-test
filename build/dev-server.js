
var webpackConfig = require("./webpack.dev.conf")
var webpack = require("webpack")
var webpackDevMiddleware = require("webpack-dev-middleware")
var webpackHotMiddleware = require("webpack-hot-middleware")
var express = require("express")
var ora = require("ora")
var chalk = require("chalk")



var compiler = webpack(webpackConfig)

var app = express()

webpackDevMiddleware(compiler,{
    publicPath:webpackConfig.output.publicPath
});

webpackHotMiddleware(compiler,{
        log:function(){
            console.log("log")
        }
});
