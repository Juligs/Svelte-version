const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
    // This says to webpack that we are in development mode and write the code in webpack file in different way
    mode: 'development',
    //Our index file
    entry: './src/index.js',
    //Where we put the production code
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/',
    },
    module: {
        rules: [
            //Allows use of modern javascript
            {
                test: /\.js?$/,
                exclude: /node_modules/, //don't test node_modules folder
                use: {
                    loader: 'babel-loader',
                },
            },
            //Allows use of svelte
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                },
            },
            //Allows use of CSS
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // Agrega 'sass-loader' aquí
            },

            //Allows use of images
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: 'file-loader',
            },
        ],
    },
    //this is what enables users to leave off the extension when importing
    resolve: {
        extensions: ['.mjs', '.js', '.svelte'],
        conditionNames: ['import', 'module', 'require', 'default'],
    },
    plugins: [
        //Allows to create an index.html in our build folder 
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        //This gets all our css and put in a unique file
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        //take our environment variable in .env file
        //And it does a text replace in the resulting bundle for any instances of process.env.
        new Dotenv(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'MY_CUSTOM_ENCODING': JSON.stringify('utf-8') // Establece la codificación UTF-8
            }
        })
    ],
    ////Config for webpack-dev-server module
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        hot: true,
        compress: true,
        port: 8080,
        open: 'chrome',
    },
};
