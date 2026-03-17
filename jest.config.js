module.exports = {
    verbose: false,
    cache: true,
    rootDir: "./test/",
    collectCoverage: false,
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/.jest/jest.init.js"]
};
