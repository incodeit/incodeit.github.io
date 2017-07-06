var extractTextWebpackPlugin = require('extract-text-webpack-plugin')

exports.modifyWebpackConfig = function(config, env) {
  config.merge({
    postcss (wp) {
      return [
        require('postcss-cssnext')({ browsers: ['last 20 versions', '> 2%', 'ie 9'] }),
      ]
    },
  })

  if (env === 'build-css') {
    config.removeLoader('sass');
    config.loader('sass', {
      test: /\.(sass|scss)/,
      exclude: /\.module\.(sass|scss)$/,
      loader: extractTextWebpackPlugin.extract(['css?minimize', 'postcss', 'sass']),
    })
  }

  if (env === 'develop') {
    config.removeLoader('sass');
    config.loader('sass', {
      test: /\.(sass|scss)/,
      exclude: /\.module\.(sass|scss)$/,
      loaders: ['style', 'css', 'postcss', 'sass'],
    })
  }

  return config
}
