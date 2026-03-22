const { maxArea } = require("../src/11-container-with-most.js");

describe("Container With Most Water", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxArea(...args)).toStrictEqual(res);
        });
    }
});
