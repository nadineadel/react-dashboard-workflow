/* config-overrides.js */
const { override, addBabelPlugins, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  ...addBabelPlugins('@babel/plugin-proposal-optional-chaining'),
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@utilities': path.resolve(__dirname, 'src/utilities'),
    '@scenes': path.resolve(__dirname, 'src/scenes'),
    '@services': path.resolve(__dirname, 'src/services'),
  })
);
