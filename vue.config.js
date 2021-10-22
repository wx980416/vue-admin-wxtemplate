const path = require('path')

module.exports = {
  outputDir: './dist',
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
  }
}
