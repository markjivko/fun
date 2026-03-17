const path = require("path");
const spawn = require("cross-spawn");

(async () => {
    // Grab the first CLI argument after "npm run test"
    const testArg = `${process.argv[2] ?? ""}`.replace(/[^\w\-]+/g, "");

    // Path to local Jest binary
    const jestArgs = ["--verbose", "--runInBand", "--passWithNoTests"];

    // If a test name prefix is provided, add -t
    if (testArg) {
        jestArgs.push("--testPathPattern", `^.*${testArg}-.*\\.test\\.js$`);
    }

    // Forward any additional args (optional)
    if (process.argv.length > 3) {
        jestArgs.push(...process.argv.slice(3));
    }

    // Run Jest
    const result = await spawn.sync("node", ["./node_modules/jest/bin/jest.js", ...jestArgs], {
        stdio: "inherit",
        cwd: path.dirname(__dirname)
    });

    // Exit with the same code as Jest
    process.exit(result.status);
})();
