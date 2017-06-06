var baseConfig = require("./webpack.base.conf")
var merge = require("merge")
var htmlWebpackPlugin = require("html-webpack-plugin")
var devConfig = {
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:true
        })
    ]
}
module.exports = merge(baseConfig,devConfig)