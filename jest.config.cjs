module.exports = {
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    moduleFileExtensions: ['ts', 'js', 'json'],
    testMatch: ['**/tests/**/*.test.js'],
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/$1',
    },
};