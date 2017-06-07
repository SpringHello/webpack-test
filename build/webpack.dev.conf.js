var baseConfig = require("./webpack.base.conf")
var webpack = require("webpack")
var merge = require("merge")
var htmlWebpackPlugin = require("html-webpack-plugin")
Object.keys(baseConfig.entry).forEach(function(name){
    baseConfig.entry[name] = ["webpack-hot-middleware/client?noInfo=true&reload=true"].concat(baseConfig.entry[name])
})
var devConfig = {
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
module.exports = merge(baseConfig,devConfig)