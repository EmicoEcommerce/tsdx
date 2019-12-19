const path = require('path');

module.exports = {
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: ['**/*.js'],
  transform: {
    '^.+\\.ts?$': path.resolve(__dirname, '../dist/createJestTransformer'),
  },
  testMatch: [
    '<rootDir>/tests/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/tests/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
};
