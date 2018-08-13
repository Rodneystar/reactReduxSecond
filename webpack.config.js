var webpack = require('webpack')
var path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

var mode = process.env.NODE_ENV || 'development';
module.exports = {
  entry: {
    main: './app/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  devtool: (mode === 'development') ? 'inline-source-map' : false,
  mode: mode,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port:8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.css$/,
        include: /css/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|git)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ]
}
