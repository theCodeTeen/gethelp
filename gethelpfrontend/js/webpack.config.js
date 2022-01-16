const path=require('path');
module.exports={
    entry:"./index.js",
    output:{
        path:path.resolve(__dirname),
        filename:"bundle.js"
    },
    devServer:{
        contentBase:"./",
        port: 8090,
        open: 'google chrome'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    }
}