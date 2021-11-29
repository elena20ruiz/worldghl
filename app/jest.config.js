module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'packages/app/src/**/*.js'
  ],
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
    '.*\\.(js)$': ['babel-jest', { rootMode: 'upward' }]
  },
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
};
