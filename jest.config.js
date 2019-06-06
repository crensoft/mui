module.exports = {
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['lib/', '/node_modules/'],
  preset: 'ts-jest',
  transform: {
    '\\.(ts|js)x?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: {
        module: 'commonjs',
        allowJs: true,
      },
    },
  },
  // collectCoverage: true
};
