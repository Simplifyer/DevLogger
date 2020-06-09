const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = (env, options) => ({
    entry: {
        "bundle": path.resolve(__dirname, "./main.ts")
    },
    output: {
        filename: "./js/[name].js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    devServer: {
        overlay: {
            errors: true,
            warnings: true
        },
        quiet: true,
        noInfo: true,
        clientLogLevel: "none"
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html"
        }),
        new webpack.DefinePlugin({
            isDev: options.mode !== "production"
        })
    ]
});