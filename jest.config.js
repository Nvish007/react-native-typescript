module.exports = {
  preset: 'react-native',
  // transformIgnorePatterns: ['/node_modules/(?!@react-navigation)'],
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/asset-mock.js',
  },
};
