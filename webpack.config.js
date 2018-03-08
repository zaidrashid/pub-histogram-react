module.exports = {
  devServer: {
    contentBase: './',
    historyApiFallback: true
  },
  entry: ['./src/index.js'],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-1'
          ]
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  }
};
