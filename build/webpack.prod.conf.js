var baseConfig = require("./webpack.base.conf")
var webpack = require("webpack")
var htmlWebpackPlugin = require("html-webpack-plugin")
var merge = require("merge")
var devConfig = {
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
module.exports = merge(baseConfig,devConfig)