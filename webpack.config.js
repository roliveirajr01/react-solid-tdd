const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',

  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/public/js/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/presentation/styles')
    }
  },

  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },

      {
        test: /\.module\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
                namedExport: false
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                webpackImporter: true
              }
            }
          }
        ]
      },

      {
        test: /\.s[ac]ss$/,
        exclude: /\.module\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                webpackImporter: true
              }
            }
          }
        ]
      },

      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/[name].[hash:8][ext]' }
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

  plugins: [ new CleanWebpackPlugin() ]
};
