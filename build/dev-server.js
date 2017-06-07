
var webpackConfig = require("./webpack.dev.conf")
var webpack = require("webpack")
var webpackDevMiddleware = require("webpack-dev-middleware")
var webpackHotMiddleware = require("webpack-hot-middleware")
var express = require("express")
var ora = require("ora")
var chalk = require("chalk")



var compiler = webpack(webpackConfig)

var app = express()

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

//var spinner =  ora('the project is publishing...').start()

var devMiddleware = webpackDevMiddleware(compiler,{
    publicPath:webpackConfig.output.publicPath,
    quiet:false
});

var hotMiddleware = webpackHotMiddleware(compiler)



app.use(devMiddleware)
app.use(hotMiddleware)



devMiddleware.waitUntilValid(function(){
    //spinner.stop()
    console.log("> Listen at localhost:8080")
})

app.listen(8080)