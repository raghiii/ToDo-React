module.exports = {
  entry: './jsx/app.js',
  output: {
    path: __dirname +'/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
