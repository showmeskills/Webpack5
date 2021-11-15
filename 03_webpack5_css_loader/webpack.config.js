const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');


//配置信息
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/",
        chunkFilename: "[name].chunk.js",
        environment: {
            arrowFunction: false,
            const: false,
        }
    },
    module: {
        rules: [
            //指定loader的规则
            {
                test: /\.(ts | tsx | jsx | js)$/,
                //要使用的loader
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //修改打包后的html的文件抬头
            title: 'snake - demo in TS',
            template: './src/index.html',
            inject: 'body',
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            "@": path.join(__dirname, "src"),
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 3000,
        hot: true,
        open:true,
    },
    mode: 'none',
}