// import createBabelConfig from './createBabelConfig';

export function createJestConfig(
  _: (relativePath: string) => void,
  rootDir: string
) {
  const config = {
    transform: {
      '.(ts|tsx)': require.resolve('ts-jest'),
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    testMatch: ['<rootDir>/**/*.(spec|test).{ts,tsx}'],
    testURL: 'http://localhost',
    rootDir,
    watchPlugins: [
      require.resolve('jest-watch-typeahead/filename'),
      require.resolve('jest-watch-typeahead/testname'),
    ],
    globals: {
      'ts-jest': {
        // TODO: Use the config created by createBabelConfig to automatically
        //  support all the same babel plugins/presets as used during the build
        //  process. This requires a refactor of createBabelConfig to return a
        //  plain .babelrc formatted JSON object, as its current non-standard
        //  output with various objects is not supported.
        // babelConfig: createBabelConfig({
        //   targets: { node: 'current' },
        //   format: 'cjs',
        // }),
        babelConfig: {
          presets: [
            ['@babel/preset-env', { targets: { node: 'current' } }],
            '@babel/preset-react',
          ],
        },
      },
    },
  };

  return config;
}
