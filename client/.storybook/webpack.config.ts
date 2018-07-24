import { createDefaultWebpackConfig } from '@storybook/core/dist/server/config/defaults/webpack.config.js'

module.exports = (baseConfig: any): any => {
  const config = createDefaultWebpackConfig(baseConfig)
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve('awesome-typescript-loader'),
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}

// TODO get storybook working
// error: Custom configuration file ParkBnb/client/.storybook/webpack.config.ts
// is detected but impossible to import loader
