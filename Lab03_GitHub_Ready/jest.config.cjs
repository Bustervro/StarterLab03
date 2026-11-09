/** Jest tests the Counter component in a simulated browser. */
module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/src/**/*.test.tsx'],
  transform: {
    '^.+\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
  },
  collectCoverageFrom: ['src/App.tsx'],
  coverageReporters: ['text', 'html'],
};
