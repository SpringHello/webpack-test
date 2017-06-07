var path = require("path");

module.exports = {
    entry:{
        main:'./src/main.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'../dist'),
        publicPath:'/'
    },
    resolve:{
        alias:{
            vue:'vue/dist/vue.js'
        }
    },
    module:{
        rules:[
            {test:/\.js$/, use:{loader: 'babel-loader',options:{compact:false}}},
            {test:/\.vue$/, use:'vue-loader'}
            //{test:/\.(png|)$/,use:'file-loader'},
        ]
    }
}