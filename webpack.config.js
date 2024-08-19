require('dotenv-extended/config');
const {resolve} = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

// ToDo: Fix savedev vs save packages

module.exports = env => {
    const isProduction = env === 'production';
    const plugins = [
        new HtmlWebpackPlugin({
            template: './client/public/index.html',
            filename: 'index.html',
            title: "React App",
            chunks: ['index']
        })
    ];

    let devtool = 'eval-source-map';

    if (isProduction) {
        process.env.NODE_ENV = env;
        devtool = 'source-map';
    }

    return {
        entry: {
            index: './client/src/index',
        },
        output: {
            path: resolve(__dirname, './build'),
            filename: '[name].[contenthash].js',
            chunkFilename: '[name].[chunkhash].js'
        },
        devtool,
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '/[contenthash].[ext]'
                            }
                        }
                    ]
                },
            ]
        },
        plugins,
        devServer: {
            port: process.env.WEBPACK_PORT,
            historyApiFallback: true,
            hot: true,
            static: resolve(__dirname, 'build'),
            proxy: {
                '/api': {
                    target: `http://localhost:${process.env.PORT}`
                },
                '/auth': {
                    target: `http://localhost:${process.env.PORT}`
                },
                '/ws': {
                    target: `http://localhost:${process.env.PORT}`,
                    ws: true
                }
            }
        },
    };
};
