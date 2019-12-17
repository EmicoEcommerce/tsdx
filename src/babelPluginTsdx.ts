import babelPlugin from 'rollup-plugin-babel';
import createBabelConfig from './createBabelConfig';

export const babelPluginTsdx = babelPlugin.custom((babelCore: any) => ({
  // Passed the plugin options.
  options({ custom: customOptions, ...pluginOptions }: any) {
    return {
      // Pull out any custom options that the plugin might have.
      customOptions,

      // Pass the options back with the two custom options removed.
      pluginOptions,
    };
  },
  config(config: any, { customOptions }: any) {
    return createBabelConfig(customOptions, config.options);
  },
}));
