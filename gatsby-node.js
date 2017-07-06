const cssnext = require('postcss-cssnext');

exports.modifyWebpackConfig = function (config) {
  config.merge({
    postcss: [
      cssnext({
        browsers: ['last 20 versions'],
      }),
    ],
  });

  config.loader('svg', {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  });

  return config
}
