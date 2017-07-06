const cssnext = require('postcss-cssnext');

exports.modifyWebpackConfig = function (config) {
  config.merge({
    postcss: [
      cssnext({
        browsers: ['last 10 versions'],
      }),
    ],
  })

  return config
}
