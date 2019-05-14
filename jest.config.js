module.exports = {
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['lib/', '/node_modules/'],
  preset: 'ts-jest',
  tsconfig: {
    exclude: ['node_modules', 'lib'],
  },
  // collectCoverage: true
};
