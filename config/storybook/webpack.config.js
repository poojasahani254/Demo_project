const autoprefixer = require('autoprefixer')
const path = require('path')
const paths = require('../paths')
const lessToJs = require('less-vars-to-js')
const fs = require('fs')
const themeVariables = lessToJs(
  fs.readFileSync(
    path.join(__dirname, '../../src/theme/variables.less'),
    'utf8'
  ),
  { stripPrefix: true }
)

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  config.module.rules = config.module.rules.filter(rule => {
    const ruleTestStr = rule.test.toString()
    return ruleTestStr !== '/\\.css$/'
  })
  config.module.rules = config.module.rules.filter(
    item =>
      !(
        item.test &&
        typeof item.test === 'object' &&
        item.test.test &&
        (item.test.test('t.svg') || item.test.test('t.png'))
      )
  )

  config.module.rules.push(
    {
      // For CSS modules
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: { localIdentName: '[name]__[local]___[hash:base64:5]' }
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            // Necessary for external CSS imports to work
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: () => [
              // for sharing antd variables with custom css modules
              require('postcss-css-variables')({
                variables: themeVariables
              }),
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9' // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009'
              })
            ]
          }
        }
      ]
    },
    {
      test: /\.less$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader?url=false' },
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true
          }
        }
      ]
    },
    {
      test: /\.(js|jsx|mjs)$/,
      include: paths.appSrc,
      loader: 'babel-loader',
      options: {
        plugins: [['import', { libraryName: 'antd', style: true }]],
        // This is a feature of `babel-loader` for webpack (not Babel itself).
        // It enables caching results in ./node_modules/.cache/babel-loader/
        // directory for faster rebuilds.
        cacheDirectory: true
      }
    },
    {
      test: /\.(png|jpe?g|gif|bmp|svg)$/,
      loader: 'file-loader',
      options: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }
  )

  // Return the altered config
  return config
}
