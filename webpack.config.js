//"root/webpacj.config.js"
/*By setting babel-loader in your webpack config, you're teaching webpack to use babel */
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js',
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
    ],
  },
};
