
var webpackConfig = require("./webpack.dev.conf")
var webpack = require("webpack")
var ora = require("ora")
var chalk = require("chalk")

var spinner = ora('building for production...')
spinner.start()

var compile = webpack(webpackConfig)

