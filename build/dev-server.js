
var webpackConfig = require("./webpack.dev.conf")
var webpack = require("webpack")
var webpackDevMiddleware = require("webpack-dev-middleware")
var webpackHotMiddleware = require("webpack-hot-middleware")
var express = require("express")
var ora = require("ora")
var chalk = require("chalk")



var compiler = webpack(webpackConfig)

var app = express()

var devMiddleware = webpackDevMiddleware(compiler,{
    publicPath:webpackConfig.output.publicPath
});

var hotMiddleware = webpackHotMiddleware(compiler,{
    log:function(){
        console.log("log")
    }
});

app.use(devMiddleware)
app.use(hotMiddleware)

app.listen(8080)

devMiddleware.waitUntilValid(function(){
    console.log("> Listen at localhost:8080")
})