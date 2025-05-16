// webpack.config.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',

  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    alias: { '@': path.join(__dirname, 'src') }
  },

  module: {
    rules: [
      // TS/TSX
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      // CSS Modules (arquivos *.module.scss)
      {
        test: /\.module\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }   // **<-- Ativa CSS Modules aqui**
          },
          'sass-loader'
        ]
      },
      // SCSS global
      {
        test: /\.s[ac]ss$/,
        exclude: /\.module\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  devServer: {
    static: { directory: path.join(__dirname, 'public') },
    devMiddleware: { writeToDisk: true },
    historyApiFallback: true,
    open: true
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-dom/client': 'ReactDOM'
  },

  plugins: [
    new CleanWebpackPlugin()
  ]
};
