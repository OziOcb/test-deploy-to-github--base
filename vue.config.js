module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test-deploy-to-github--base/'
    : '/'
}