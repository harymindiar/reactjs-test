var webpack = require('webpack');
var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  entry: {
    sample: './app/sample_table.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: 'public',
    filename: '[name]_bundle.js'
  },
  plugins: PROD ? [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new VendorChunkPlugin('vendor'),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : [],
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
    ]
  }
};
