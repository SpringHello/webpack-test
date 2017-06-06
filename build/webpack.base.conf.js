var path = require("path");

module.exports = {
    entry:{
        app:'./src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        publicPath:'/',
        filename:'[name].js'
    },
    resolve:{
        alias:{
            vue:'vue/dist/vue.js'
        }
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader'}
        ]
    }
}