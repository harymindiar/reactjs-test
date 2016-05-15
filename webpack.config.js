module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'public/bundle.js'
  },
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
          presets: ['es2015', 'react']
        }
      },
    ]
  }
};
