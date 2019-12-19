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
        // TODO: babelConfig: createBabelConfig({
        //   target: 'node',
        //   format: 'cjs',
        // }),
        babelConfig: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
  };

  return config;
}
