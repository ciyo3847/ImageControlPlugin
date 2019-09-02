const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry:'./src/index.js',/* 入口文件模块路径 */
    output:{
        path:path.join(__dirname,'./dist/'),/* 出口文件模块所属目录，必须是一个绝对路径 */
        filename:'image-control.bundle.js'/* 打包的结果文件名称 */
    },
    devServer:{
        // 配置webpack-dev-server的www目录
        contentBase:'./dist'
    },
    plugins:[
        // 该插件可以把index.html打包到bundle.js文件所属目录，跟着bundle走
        // 同时也会自动在index.html中注入script引用链接，并且引用的资源名称，也取决于打包的文件名称
        new htmlWebpackPlugin({
            title: 'imageControl',
            template:'./src/index.html',
            filename: 'index.html',
            showErrors: true,
            inject: 'body'
        }),
        new CopyWebpackPlugin([
            {
                from: './src/image',
                to: './image'
            }
        ])
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    //注意：这里的顺序很重要，不要乱了顺序
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=10000&name=images/[hash:8].[name].[ext]'
            }
        ]
    }
}