const path = require('path'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    isDev = process.env.NODE_ENV === 'development'


module.exports = {


    entry: {
        index: './src/pages/index/index.js',
        about: './src/pages/about/about.js',
        analytics: './src/pages/analytics/analytics.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: { loader: "babel-loader" },
            exclude: /node_modules/
        },
        {
            test: /\.css$/i,
            use: [(isDev ? 'style-loader' : { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../', } }), 'css-loader', 'postcss-loader']
        },
        {
            test: /\.(png|jpe?g|gif|ico|svg|webp)$/i,
            use: [
                'file-loader?name=images/[name].[ext]',
                {
                    loader: 'image-webpack-loader',
                    options: {

                    }
                },
            ],
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader?name=vendor/[name].[ext]'
        }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css', }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true
        }),

        new HtmlWebpackPlugin({
            inject: false,
            chunks: ['index'],
            template: './src/pages/index/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/pages/about/about.html',
            chunks: ['about'],
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/pages/analytics/analytics.html',
            chunks: ['analytics'],
            filename: 'analytics.html'
        }),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),

        new WebpackMd5Hash(),
    ]
}