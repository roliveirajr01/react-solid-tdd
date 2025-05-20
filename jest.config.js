module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy'
  },
  testPathIgnorePatterns: ['/node_modules/'],
  passWithNoTests: true,
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "\\.d\\.ts$"
  ]
}
