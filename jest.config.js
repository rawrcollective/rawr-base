module.exports = {
  testMatch: ['**/__tests__/**/*.js?(x)'],
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
};
