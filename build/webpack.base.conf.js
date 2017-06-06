var path = require("path");

module.exports = {
    entry:{
        app:'./src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        publicPath:'/',
        filename:'[name].js'
    }
}