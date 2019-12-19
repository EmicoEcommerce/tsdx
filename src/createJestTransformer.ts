import babelJest from 'babel-jest';

import createBabelConfig from './createBabelConfig';

module.exports = babelJest.createTransformer({
  ...createBabelConfig({
    target: 'node',
    format: 'cjs',
  }),
  babelrc: false,
  configFile: false,
});
